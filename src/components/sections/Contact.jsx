import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { SOCIALS } from "../../data/constants";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState({ msg: "", type: "", visible: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const showStatus = (msg, type) => {
        setStatus({ msg, type, visible: true });
        setTimeout(
            () => setStatus((prev) => ({ ...prev, visible: false })),
            4000
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `[Portfolio] Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
        showStatus("> Opening default mail client...", "success");
    };

    const handleCopy = () => {
        const { name, email, message } = formData;
        if (!name && !email && !message) {
            showStatus("> Error: Buffer empty. Nothing to copy.", "error");
            return;
        }
        const formattedText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        navigator.clipboard
            .writeText(formattedText)
            .then(() => showStatus("> Buffer copied to clipboard.", "success"))
            .catch(() =>
                showStatus("> Error: Clipboard access denied.", "error")
            );
    };

    return (
        <section id="contact" className="container reveal">
            <SectionHeader title="./send_packet.sh" />
            <div className="terminal-block">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>DESTINATION_NAME = </label>
                        <input
                            type="text"
                            id="name"
                            placeholder='"Input Name"'
                            required
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div className="input-group">
                        <label>REPLY_TO_EMAIL = </label>
                        <input
                            type="email"
                            id="email"
                            placeholder='"Input Email"'
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="input-group">
                        <label>PAYLOAD_MESSAGE = </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder='"Input Message content..."'
                            required
                            onChange={handleChange}
                            value={formData.message}
                        ></textarea>
                    </div>
                    <div className="form-controls">
                        <button type="submit" className="terminal-btn">
                            [ INITIATE_SEND ]
                        </button>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="terminal-btn outline"
                        >
                            [ COPY_STDOUT ]
                        </button>
                    </div>
                </form>
                {status.visible && (
                    <div
                        style={{
                            color:
                                status.type === "error"
                                    ? "red"
                                    : "var(--accent)",
                            marginTop: "10px",
                        }}
                    >
                        {status.msg}
                    </div>
                )}
            </div>
        </section>
    );
};
export default Contact;
