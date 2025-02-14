"use client";
import { AiOutlineCheck } from "react-icons/ai";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import MessageError from "./ui/MessageError";
import { toast } from "sonner";
import { useAnimatedInView } from "@/hooks/useAnimateInView";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { ref, inView } = useAnimatedInView();
  const initialValues: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: initialValues });

  const handleSubmitForm = async (data: FormData) => {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: data.name,
          from_email: data.email,
          from_subject: data.subject,
          from_message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      if (response.status === 200) {
        toast.success(
          "Gracias por tu mensaje, te responderé lo más pronto posible."
        );
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section id="contact" ref={ref} className={`max-w-5xl mx-auto px-5 lg:px-0 py-32 ${inView ? "animate-fade-left" : "opacity-0"}`}>
      <div className="flex flex-col gap-y-9 lg:gap-y-0 lg:flex-row lg:gap-x-3 items-center">
        <div className="lg:w-2/5 space-y-5">
          <h2 className="text-primary-500 font-bold text-3xl">
            ¿Tienes una oportunidad laboral?{" "}
            <span className="text-white">No dudes en contactarme.</span>
          </h2>
          <p className="text-sm text-gray-500">
            Estoy disponible para discutir colaboraciones, responder preguntas o
            explorar nuevas oportunidades profesionales.
          </p>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <div className="rounded-full bg-primary-500 p-2">
                <AiOutlineCheck className="text-black text-sm" />
              </div>
              <p className="text-white font-bold text-lg">Frontend Developer</p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="rounded-full bg-primary-500 p-2">
                <AiOutlineCheck className="text-black text-sm" />
              </div>
              <p className="text-white font-bold text-lg">Backend Developer</p>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="rounded-full bg-primary-500 p-2">
                <AiOutlineCheck className="text-black text-sm" />
              </div>
              <p className="text-white font-bold text-lg">Web Developer</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5">
          <form
            className="w-full bg-black p-10 rounded-lg space-y-5"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-between lg:items-center gap-x-3">
              <div className="lg:w-1/2 space-y-2 flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-500 text-sm font-bold"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-darkgray-600 text-sm text-gray-500 focus:ring-1 focus:outline focus:outline-primary-500 rounded-md px-4 py-3 placeholder:text-sm placeholder:text-darkgray-400"
                  placeholder="Ingresa tu nombre"
                  {...register("name", {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.name && (
                  <MessageError>{errors.name.message}</MessageError>
                )}
              </div>

              <div className="lg:w-1/2 space-y-2 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-500 text-sm font-bold"
                >
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-darkgray-600 text-sm text-gray-500 focus:ring-1 focus:outline focus:outline-primary-500 rounded-md px-4 py-3 placeholder:text-sm placeholder:text-darkgray-400"
                  placeholder="Ingresa tu email"
                  {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "El correo no es válido",
                    },
                  })}
                />
                {errors.email && (
                  <MessageError>{errors.email.message}</MessageError>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col space-y-2">
              <label
                htmlFor="subject"
                className="text-gray-500 text-sm font-bold"
              >
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                className="w-full bg-darkgray-600 text-sm text-gray-500 focus:ring-1 focus:outline focus:outline-primary-500 rounded-md px-4 py-3 placeholder:text-sm placeholder:text-darkgray-400"
                placeholder="Ingresa el asunto del mensaje"
                {...register("subject", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.subject && (
                <MessageError>{errors.subject.message}</MessageError>
              )}
            </div>

            <div className="w-full flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-gray-500 text-sm font-bold"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                className="w-full resize-none h-24 bg-darkgray-600 text-sm text-gray-500 focus:ring-1 focus:outline focus:outline-primary-500 rounded-md px-4 py-3 placeholder:text-sm placeholder:text-darkgray-400"
                placeholder="Ingresa tu mensaje"
                {...register("message", {
                  required: "El mensaje no puede ir vacío",
                })}
              ></textarea>
              {errors.message && (
                <MessageError>{errors.message.message}</MessageError>
              )}
            </div>

            <input
              type="submit"
              value="Enviar mensaje"
              className="rounded-lg bg-primary-500 cursor-pointer font-bold px-4 py-3 text-black hover:bg-primary-600 duration-200"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
