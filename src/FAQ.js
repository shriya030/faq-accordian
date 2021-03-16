import React, {useState} from 'react';
import './FAQ.css';
import Icon from './images/icon-arrow-down.svg';

function FAQ() {
    const [faqs, setFaqs] = useState([
        {
            question: "How many team members can I invite?",
            answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
            open: false
        },
        {
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
            open: false
        },
        {
            question: "How do I reset my password?",
            answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
            open: false
        }, 
        {
            question: "Can I cancel my subscription? ",
            answer: "Yes! Send us a message and we’ll process your request no questions asked.",
            open: false
        }, 
        {
            question: "Do you provide additional support?",
            answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if(i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }
    return (
        <div className='faqs'>
        <h2>FAQ</h2>
            {faqs.map((faq, i) => (
                <div 
                className={'faq' + (faq.open ? '-open': '')}
                key={i}
                onClick={() => toggleFAQ(i)}
                >
                <div className="faq-question">
                    {faq.question}
                    <span>
                        <img src={Icon} alt=""></img>
                    </span>
                </div>
                    <div className="faq-answer">
                        {faq.answer}
                    </div>
                    <div className="divider"></div>
                </div>
            ))}
        </div>
    )
}

export default FAQ
