// "use client"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useState } from "react"

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [submissionStatus, setSubmissionStatus] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         access_key: "4dae77d3-0c57-4e92-8cc3-df618629a455", // Web3Forms access key
//         ...formData
//       })
//     })

//     if (response.ok) {
//       setSubmissionStatus("Form submitted successfully!")
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       })
//     } else {
//       setSubmissionStatus("Failed to submit the form. Please try again.")
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-2xl mx-auto space-y-6">
//         <div className="space-y-2 text-center">
//           <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
//           <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//             Have a question or feedback? We'd love to hear from you.
//           </p>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Input
//               placeholder="Your name"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Input
//               type="email"
//               placeholder="Your email"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Input
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={(e) => setFormData({...formData, subject: e.target.value})}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Textarea
//               placeholder="Your message"
//               className="min-h-[150px]"
//               value={formData.message}
//               onChange={(e) => setFormData({...formData, message: e.target.value})}
//               required
//             />
//           </div>
//           <Button type="submit" className="w-full">
//             Send Message
//           </Button>
//         </form>

//         {submissionStatus && (
//           <div className="mt-4 p-4 text-center flex gap-6 rounded">
//             {submissionStatus}
//             <Button onClick={()=>{window.location.href = "/"}}> { } { } Back to home</Button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ContactPage


"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submissionStatus, setSubmissionStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "4dae77d3-0c57-4e92-8cc3-df618629a455", // Web3Forms access key
        ...formData
      })
    })

    if (response.ok) {
      setSubmissionStatus("Form submitted successfully!")
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      setSubmissionStatus("Failed to submit the form. Please try again.")
    }
  }

  return (
    <div
      className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/contact-banner.jpg')`, // Add the correct path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-2xl mx-auto space-y-6 bg-white/90 dark:bg-gray-900/90 p-8 rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your message"
              className="min-h-[150px]"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        {submissionStatus && (
          <div className="mt-4 p-4 text-center flex gap-6 rounded">
            {submissionStatus}
            <Button onClick={() => { window.location.href = "/" }}>Back to home</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactPage
