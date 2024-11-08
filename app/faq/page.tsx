import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faq } from "@/constants/data"
import { FaQuestionCircle } from "react-icons/fa";

  

const FAQPage = () => {
  return (
    <div className='mx-auto container max-md:px-6'>
        <div className='my-10'>
        <h1 className='text-4xl font-bold max-md:text-2xl'>Frequently Asked Questions</h1>
        <p className='text-lg font-instrument'>Have any questions that weren&apos;t answered here? Feel free to contact us at ____.com</p>
        </div>
        {faq.map(({question, answer}) => (
            <Accordion className="" key={question} type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold  ">
                        <div className="flex gap-2 items-center"><FaQuestionCircle />{question}
                            </div>
                    </AccordionTrigger>
                    <AccordionContent> 
                    <span className="text-lg">{answer}</span>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        ))}
        

    </div>
  )
}

export default FAQPage