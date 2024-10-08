import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import "./contact.css";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onHandleContact = async (value: any) => {
    try {
      const data = await {
        ...value,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      if (data) {
        reset();
        toast.success("Contact successfully");
      } else {
        toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact me</h2>
      <span className="section__subtitle">
        Let's connect and dive into our project right away!
      </span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <form
            onSubmit={handleSubmit(onHandleContact)}
            className="contact__form"
          >
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-tag">
                {errors.name ? (
                  <span className="text-red-500">
                    {errors.name.message as React.ReactNode}
                  </span>
                ) : (
                  <span>Name</span>
                )}
              </label>
              <input
                className="contact__form-input"
                id="name"
                {...register("name", {
                  required: "Please insert your name",
                })}
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-tag">
                {errors.email ? (
                  <span className="text-red-500">
                    {errors.email.message as React.ReactNode}
                  </span>
                ) : (
                  <span>Email</span>
                )}
              </label>
              <input
                className="contact__form-input"
                id="email"
                {...register("email", {
                  required: "Please insert your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-group contact__form-area">
              <label htmlFor="name" className="contact__form-tag">
                {errors.message ? (
                  <span className="text-red-500">
                    {errors.message.message as React.ReactNode}
                  </span>
                ) : (
                  <span>Message</span>
                )}
              </label>
              <textarea
                className="contact__form-input"
                {...register("message", {
                  required: "Please insert your message",
                  maxLength: {
                    value: 200,
                    message: "Enter a maximum of 200 characters",
                  },
                })}
                id="message"
                cols={30}
                rows={10}
                placeholder="Insert your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="button button--flex contact__form-send"
            >
              Send<i className="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
