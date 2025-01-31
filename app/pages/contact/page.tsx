import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}

        <div className="hidden lg:block">
          <Image
            className="dark:invert w-full h-auto rounded-2xl shadow-lg object-cover"
            src="/image.png"
            alt="Contact"
            width={480}
            height={680}

          />
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 shadow-lg rounded-2xl max-w-lg w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CONTACT ME</h2>
          <p className="text-gray-600 mb-6">
            You might want to develop a website, application or discuss anything
            related. Take a break to leave a message below.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="ec323071-c9a1-48e4-9bba-87c32ecc2b27"
            />

            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Your Email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="messageMe"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                name="Message"
                id="messageMe"
                placeholder="Your Message"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                //   rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M4 6.03L11.5 9.25L4 8.25V6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3V10L17 12L2 14V21L23 12L2 3Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
