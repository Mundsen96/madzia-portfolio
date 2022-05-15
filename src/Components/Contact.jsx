import React from 'react';

const Contact = () => {
  const FORM_ENDPOINT =
    'https://public.herotofu.com/v1/ba654c00-d46c-11ec-a821-6590c8b23a22';

  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="flex justify-center flex-col items-center p-10 text-xl">
        <div className="py-3 px-5 rounded-md bg-red-200 text-white">
          Thank you! I'll respond to Your message as soon as possible.
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="flex justify-center flex-col items-center p-10 text-xl"
    >
      <h1 className="bg-red-200 p-3 text-white rounded-full text-center">
        Contact me!
      </h1>
      <div className="w-1/5 py-2">
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="Name"
          required
          className="w-full py-3 px-5 rounded-md border-4 border-red-200"
        />
      </div>
      <div className="w-1/5 py-2">
        <label htmlFor="E-mail">E-mail:</label>
        <input
          type="email"
          name="E-mail"
          required
          className="w-full py-3 px-5 rounded-md border-4 border-red-200"
        />
      </div>
      <div className="w-1/5 py-2">
        <label htmlFor="Message">Message:</label>
        <textarea
          name="Message"
          required
          className="w-full py-3 px-5 rounded-md border-4 border-red-200"
        />
      </div>
      <div className="submit">
        <button
          type="submit"
          className="w-fit py-3 px-5 border-4 border-red-200 text-md bg-red-100 text-white rounded-lg hover:bg-red-200"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default Contact;
