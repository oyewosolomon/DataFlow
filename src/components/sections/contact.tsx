import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('email');

  // Handler for radio button change
  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const mutation = useMutation({
    mutationFn: (data: ContactForm) => 
      apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your message has been sent successfully!"
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await mutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  return (
    <section className="py-24" id="contact">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* Left Side */}
        <div className="lg:mb-0 mb-10">
          <div className="group w-full h-full">
            <div className="relative h-full">
              <img
                src="https://pagedone.io/asset/uploads/1696488602.png"
                alt="ContactUs tailwind section"
                className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
              />
              <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                Contact us
              </h1>
              <div className="absolute bottom-0 w-full lg:p-11 p-5">
                <div className="bg-white rounded-lg p-6 block">
                  
                  <a href="#" className="flex items-center mb-6">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      hello@dataflowng.com
                    </h5>
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
          <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
            Send Us A Message
          </h2>
          <input
            type="text"
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            placeholder="Phone"
          />
          <div className="mb-10">
            <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
              Preferred method of communication
            </h4>
            <div className="flex">
              <div className="flex items-center mr-11">
                <input
                  id="radio-group-1"
                  type="radio"
                  name="radio-group"
                  value="email"
                  checked={selectedMethod === 'email'}
                  onChange={handleMethodChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor="radio-group-1"
                  className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6 ml-2"
                >
                  Email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="radio-group-2"
                  type="radio"
                  name="radio-group"
                  value="phone"
                  checked={selectedMethod === 'phone'}
                  onChange={handleMethodChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor="radio-group-2"
                  className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6 ml-2"
                >
                  Phone
                </label>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            placeholder="Message"
          />
          <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}
