export const speciality = [
    {
        img: "/Images/dish-2.png",
        title: "Indian Cusine",
        description: "Indian cuisine is a rich tapestry of flavors, spices, and aromas. Known for its diverse regional specialties, it features aromatic curries, tandoori-cooked meats, and an array of vegetarian dishes such as dal and paneer. The use of spices like cumin, coriander, and turmeric creates a symphony of taste, making Indian cuisine a delightful and culturally significant culinary experience."
    },
    {
        img: "/Images/dish-2.png",
        title: "Italian Cusine",
        description: "Italian cuisine is a celebration of simplicity and quality ingredients. Renowned for its pasta, pizza, and olive oil-infused dishes, it captures the essence of Mediterranean flavors. From rich risottos to flavorful sauces like marinara and pesto, Italian cooking emphasizes fresh produce, herbs, and cheeses. With a focus on family-style dining, it creates a warm and inviting culinary experience."
    },
    {
        img: "/Images/dish-2.png",
        title: "Mexican Cusine",
        description: "Mexican cuisine is a vibrant fusion of bold flavors and spices. Known for its diverse dishes, such as tacos, enchiladas, and guacamole, it incorporates ingredients like chili peppers, cilantro, and lime. The cuisine showcases a perfect balance of sweet, savory, and spicy elements, creating a lively and satisfying dining experience. "
    },
];

export const recommendations = [
    {
        title: "Paneer Tikka",
        img: 'https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.webp?b=1&s=170667a&w=0&k=20&c=5xD3IxRiEuT7WN4ixTc7iM3DHLS_1LzbwltaWHvTYvk=',
    },
    {
        title: "Dal Bati",
        img: 'https://media.istockphoto.com/id/521667919/photo/indian-rajasthani-food-dal-bati-laddu-salad.webp?b=1&s=170667a&w=0&k=20&c=XkJqqv2gKN4PrrDAg00DRSlfBMxe6_t9BBagvhT6B8M=',
    },
    {
        title: "Kaju Masala",
        img: 'https://media.istockphoto.com/id/1079019028/photo/cashew-curry-indian-kaju-masala-served-in-a-bowl-or-pan-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=9pJjJuXcxel-sTk4RGUndHSgEXCQrCMVgqcavpzAFSg=',
    },
    {
        title: "Paneer Biryani",
        img: 'https://media.istockphoto.com/id/1292443683/photo/hyderabadi-veg-paneer-dum-biryani-with-mixed-veggies-like-paneer-potato-carrots-peas-cooked.webp?b=1&s=170667a&w=0&k=20&c=MpDtHAICwiLLgQrbUEfBhvAnSihooWlOKo-t9a-vyoc=',
    },
]

export const dishes = [
    {
        title: "Paneer Tikka",
        img: 'https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.webp?b=1&s=170667a&w=0&k=20&c=5xD3IxRiEuT7WN4ixTc7iM3DHLS_1LzbwltaWHvTYvk=',
        price: 250,
        macros: {
            protein: 25,
            carbs: 50,
            fat: 10
        },
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo suscipit aliquam ipsam nulla nobis aut ut adipisci voluptatum, doloribus, repudiandae quam, exercitationem voluptate laboriosam tempore iste dolor dolorum animi corporis!",
        ingredients: "repudiandae quam, exercitationem voluptate laboriosam tempore iste dolor dolorum animi corporis!",
        type: 'Veg',
        category: "Main Courses"
    },
    {
        title: "Dal Bati",
        img: 'https://media.istockphoto.com/id/521667919/photo/indian-rajasthani-food-dal-bati-laddu-salad.webp?b=1&s=170667a&w=0&k=20&c=XkJqqv2gKN4PrrDAg00DRSlfBMxe6_t9BBagvhT6B8M=',
        price: 100,
        macros: {
            protein: 25,
            carbs: 50,
            fat: 10
        },
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo suscipit aliquam ipsam nulla nobis aut ut adipisci voluptatum, doloribus, repudiandae quam, exercitationem voluptate laboriosam tempore iste dolor dolorum animi corporis!",
        ingredients: "repudiandae quam, exercitationem voluptate laboriosam tempore iste dolor dolorum animi corporis!",
        type: 'Nonveg',
        category: "Main Courses"
    },

]


export const instructions = [
    {
        img: "/Images/Scanner.png",
        title: "Scan the QR Code:",
        description: {
            l1: "Open your phone's camera",
            l2: "Scan the QR code on your table"
        }
    },
    {
        img: "/Images/BrowseMenu.webp",
        title: "Browse the Menu",
        description: {
            l1: "A link will appear after scanning",
            l2: "Tap to view the digital menu"
        }
    },
    {
        img: "/Images/PlaceOrder.webp",
        title: "Place Your Order:",
        description: {
            l1: "Add to your cart and place the order",
            l2: "Pay Online Or Wait For The Waiter"
        }
    },
    {
        img: "/Images/Family.jpg",
        title: "Wait for Your Order:",
        description: {
            l1: "Relax while our team prepares your delicious meal",
            l2: "And All Set"
        }
    },
]

export const registerCredentials = [
    {
        name: "firstName",
        type: 'text',
        id: 'first',
        heading: 'First Name'
    },
    {
        name: "lastName",
        type: 'text',
        id: 'last',
        heading: 'Last Name'
    },
    {
        name: "email",
        type: 'email',
        id: 'email',
        heading: 'Email Id'
    },
    {
        name: "phone",
        type: 'text',
        id: 'phone',
        heading: 'Phone Number'
    },
    {
        name: "password",
        type: 'text',
        id: 'password',
        heading: 'Password'
    },
    {
        name: "cPassword",
        type: 'password',
        id: 'cPassword',
        heading: 'Confirm Password'
    },
];

export const loginCredentials = [
    {
        name: "phone",
        type: 'text',
        id: 'phone',
        heading: 'Phone Number'
    },
    {
        name: "password",
        type: 'password',
        id: 'password',
        heading: 'Password'
    },
];

export const contactCredentials = [
    {
        name: "Name",
        type: 'text',
        id: 'Name',
        heading: 'Name'
    },
    {
        name: "phone",
        type: 'text',
        id: 'phone',
        heading: 'Phone Number'
    },
];

export const contactCard = [
    {
        icon: "FaPhoneVolume",
        title: "Call",
        description: "+91 7559428838"
    },
    {
        icon: "FaEnvelope",
        title: "Email",
        description: "tejasdhodi77@gmail.com"
    },
    {
        icon: "FaLocationArrow",
        title: "Address",
        description: "Maharashtra, Dahanu 401602"
    },
]