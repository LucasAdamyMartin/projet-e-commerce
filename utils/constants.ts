export const TEXTS: { [key: string]: string } = {
    SignIn : "Sign In",
    SignUp : "Sign Up",
    Title : "vantela",
    CopyrightText : "Copyright 2023. All Right Reserverd",
    NewsletterText : "Subscribe to our newsletter ...",
    SearchText : "Search ...",
    ShopNowText : "Shop Now",
    HomeTitleStrong : "PUBLIC HIGH",
    HomeTitleNotStrong : "GUM NATURAL",
    HomeParagraphe : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem \n Ipsum passages, and more recently with desktop publishing",
    BackgroundText : "New Arrivals",
    ConditionsText : "By pressing the Register button means that you have agreed to the terms and conditions of the application",
}

export interface Field {
    name: string;
    label: string;
    type: "text" | "email" | "password" | "textarea" | "date"; // ✅ Ajout du type "date"
    required?: boolean;
    placeholder? : string;
  }
  
  export const contactFields: Field[] = [
    { name: "name", label: "Full name", type: "text", required: true, placeholder: "Jean Dupont" },
    { name: "username", label: "Username", type: "text", required: true, placeholder: "jdupont123" },
    { name: "birth", label: "Date of birth", type: "date", required: true },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "jeandupont@example.com" },
    { name: "password", label: "Password", type: "password", required: true },
    { name: "confirmPassword", label: "Confirm Password", type: "password", required: true },
];

export const addressFields: Field[] = [
    { name: "zipCode", label: "ZIP Code", type: "text", required: true, placeholder: "75001" },
    { name: "city", label: "City", type: "text", required: true, placeholder: "Paris" },
    { name: "state", label: "State", type: "text", required: true, placeholder: "Île-de-France" },
    { name: "country", label: "Country", type: "text", required: true, placeholder: "France" },
];



export const NAVIGATION_ITEMS : {text : string, link? : string}[] =  [{text : "Home", link: "/"}, {text : "Sneakers"}, {text : "Slip On"}, {text : "Sandals", link: "/sandals"}, {text : "Others"}];

export const COMPANY_ITEMS : {text : string, link? : string}[]  = [{text: "About Us"}, {text :"Our store"}, {text :"News"}];

export const HELP_ITEMS : {text : string, link? : string}[]  = [{text :"FAQ"}, {text :"Help", link:"contactUs"}, {text :"Terms"}];

export const SOCIAL_MEDIA_ITEMS : {text : string, link? : string}[]  = [{text :"Facebook"}, {text :"Tiktok"}, {text :"Instagram"}];

export const CONTACT_ITEMS : {text : string, link? : string}[]  = [{text :"Sukaasih, Kota Tangerang, Banten 15111"}, {text :"Phone : 0976444677"}, {text :"Mail : adminvantela@domain.com"}];
