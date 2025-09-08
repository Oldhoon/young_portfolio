import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Alert from "../components/Alert";
import { BorderBeam } from "../components/BorderBeam";
import { Particles } from "../components/Particles";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [showAlert, setshowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setalertMessage] = useState("");
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const showAlertBox = (type, message) => {
        setAlertType(type);
        setalertMessage(message);
        setshowAlert(true);
    }

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

        await emailjs.send('service_dfn5fyi','template_7u38ncv',
            {
                from_name: form.name,
                to_name: 'Young',
                from_email:form.email,
                email: 'kimyoh123@gmail.com',
                message: form.message
            },'mjNNDLfog5himy5HE')
            setLoading(false);
            showAlertBox("success", "Thanks for reaching out! I’ll grab a coffee and get back to you shortly ☕");
            setTimeout(() => {
                setshowAlert(false);
            }, 5000)

            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            showAlertBox("danger", "Sorry! The email didn’t go through. Give it another shot.");
            setTimeout(() => {
                setshowAlert(false);
            }, 5000)
         }
         

    }

  return (
    <section id='contact' className="c-space relative flex items-center section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        {showAlert && <Alert type={alertType} text={alertMessage}/>} 
        <div className="relative overflow-hidden max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary flex items-center justify-center flex-col">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Let's Talk</h2>
                <p className="font-normal text-neutral-400">
                I’m always open to discussing new opportunities, collaborations, and exciting projects — feel free to reach out!
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="w-full">
                    <div className="mb-5">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="Junior Chicken" />
                        <span className="field-label">Email</span>
                        <input type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="hire.me.pls@futureboss.com" />
                        <span className="field-label">Your message</span>
                        <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="field-input"
                        placeholder="Tell me your deepest debugging struggles..." />
                    </label>
                    </div>
                    <button className='w-full px-1 py-3 text-lg text-center rounded-md bg-radial from-lavender to-royal hover-animation cursor-pointer' type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                    
                </form>
                
            </div>
            <BorderBeam duration={8} size={100} />
        </div>
        


    </section>
  )
}

export default Contact