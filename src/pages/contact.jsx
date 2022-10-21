import emailjs from '@emailjs/browser'
import Head from 'next/head'
import { useForm } from '@/lib/hooks'
import { Container } from '@/components/Container'
import { toast } from 'react-toastify'

export default function Contact() {
  const { values, setValues, onChange, onSubmit } = useForm(sendEmail, {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })

  function sendEmail() {
    emailjs
      .send(
        'service_5p5kdj4',
        'template_o3o32xz',
        {
          name: `${values.firstName} ${values.lastName}`,
          phone: values.phone,
          email: values.email,
          message: values.message,
        },
        '2OWMjppmThuJ7MoZu'
      )
      .then(() => {
        toast.success(`Email sent!`)
        setValues({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        })
      }),
      (error) => {
        toast.error('Something went wrong, please try again later.')
      }
  }

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact me for any questions or concerns you may have."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="mx-auto flex w-full flex-col justify-center rounded-lg border border-zinc-200 p-4 shadow-md dark:border-zinc-700/40 dark:shadow-cyan-700 sm:max-w-lg sm:p-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-4 text-lg leading-6 text-zinc-800 dark:text-zinc-100">
              Contact me for any questions or concerns you may have and ill be
              sure to get back to you ASAP. Any business opportunites and
              feedback are welcome.
            </p>
          </div>
          <div className="mt-12">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={onChange}
                    className="block w-full rounded-md border border-gray-200 py-3 px-4 shadow-sm shadow-gray-400 focus:border-cyan-500 focus:ring-cyan-500 dark:shadow-cyan-700"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange}
                    className="block w-full rounded-md border border-gray-200 py-3 px-4 shadow-sm shadow-gray-400 focus:border-cyan-500 focus:ring-cyan-500 dark:shadow-cyan-700"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    className="block w-full rounded-md border border-gray-200 py-3 px-4 shadow-sm shadow-gray-400 focus:border-cyan-500 focus:ring-cyan-500 dark:shadow-cyan-700"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={onChange}
                    className="block w-full rounded-md border border-gray-200 py-3 px-4 shadow-sm shadow-gray-400 focus:border-cyan-500 focus:ring-cyan-500 dark:shadow-cyan-700"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows={4}
                    className="block w-full rounded-md border border-gray-200 py-3 px-4 shadow-sm shadow-gray-400 focus:border-cyan-500 focus:ring-cyan-500 dark:shadow-cyan-700"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}
