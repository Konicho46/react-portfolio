import React from 'react'
import { RiLayoutMasonryFill, RiComputerFill, RiDatabaseFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiLayoutMasonryFill size={65} />,
        service_name: "UI/UX Design",
        service_description: "Able to design interface designs for desktop and mobile applications with a focus on optimal user experience and modern aesthetics using Figma, Framer, Adobe Illustrator, and Adobe Photoshop tools."
    },
    {
        id: 2,
        icon: <RiComputerFill size={65} />,
        service_name: "Website Development",
        service_description: "Have expertise in front-end development, building responsive, fast, and business-appropriate websites using the latest technology. Currently learning to use React Native for Front-End needs."
    },
    {
        id: 3,
        icon: <RiDatabaseFill size={65} />,
        service_name: "Data Analyst & Visualization",
        service_description: "Experienced in creating data visualization reports using Power BI to process complex data, create interactive dashboards, and present easy-to-understand insights for various business analysis needs."
    },

]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services