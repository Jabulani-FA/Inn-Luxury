import { PhoneOutlined, CalendarOutlined, EnvironmentOutlined, DesktopOutlined, CustomerServiceOutlined, CheckSquareOutlined, CarOutlined, SmileOutlined } from "@ant-design/icons";
export const ReasonList = [
    {
        Phase: "Space Reservation",
        Details: "Customers book a space for exhibition or design services via the website, selecting their desired date, type of space, and preferences.",
        Period: "1-2 Days",
        icon: <CalendarOutlined />
    },
    {
        Phase: "Initial Consultation",
        Details: "A dedicated agent contacts the customer to discuss their goals, preferred style, and specific requirements for the space. This could include a virtual or physical meeting.",
        Period: "1 Day",
        icon: <PhoneOutlined />
    },
    {
        Phase: "Site Visit and Measurements",
        Details: "Our team visits the customer's location to take precise measurements and understand the spatial dynamics, ensuring accurate planning and design.",
        Period: "2-3 Days",
        icon: <EnvironmentOutlined />
    },
    {
        Phase: "Virtual Design Simulation",
        Details: "Using the collected measurements and customer preferences, we create a virtual simulation of the space, showcasing the arrangement of furniture, decoration fabrics, and layouts.",
        Period: "3-5 Days",
        icon: <DesktopOutlined />
    },
    {
        Phase: "Design Review and Approval",
        Details: "Customers review the virtual simulation and provide feedback for adjustments. Once satisfied, they approve the final design.",
        Period: "2 Days",
        icon: <CheckSquareOutlined />
    },
    {
        Phase: "Product Delivery and Setup",
        Details: "After design approval, the selected furniture and decorations are delivered to the customer's location. Our professional installation team sets up the space, ensuring everything fits perfectly.",
        Period: "1-2 Weeks",
        icon: <CarOutlined />
    },
    {
        Phase: "Final Inspection and Handover",
        Details: "The customer inspects the completed setup with our team to confirm satisfaction. Any final tweaks are handled immediately.",
        Period: "1 Day",
        icon: <SmileOutlined />
    },
    {
        Phase: "Post-Setup Support",
        Details: "We offer ongoing support for maintenance or adjustments and collect customer feedback to ensure long-term satisfaction.",
        Period: "Ongoing",
        icon: <CustomerServiceOutlined />
    },
]