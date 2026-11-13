
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("jobfusion-language") || "en";

const resources = {
    en: {
        translation: {
            dashboard: "Dashboard",
            myProfile: "My Profile",
            accountSettings: "Account Settings",
            logout: "Logout",
            notifications: "Notifications",
            language: "Language",
            fullscreen: "Fullscreen",
            exitFullscreen: "Exit Fullscreen",
            adminUser: "Admin User",
            administrator: "Administrator",
            newRecruiter: "New recruiter registered",
            newJobApproval: "New job requires approval",
        },
    },
    hi: {
        translation: {
            dashboard: "डैशबोर्ड",
            myProfile: "मेरी प्रोफ़ाइल",
            accountSettings: "अकाउंट सेटिंग्स",
            logout: "लॉग आउट",
            notifications: "सूचनाएं",
            language: "भाषा",
            fullscreen: "फुलस्क्रीन",
            exitFullscreen: "फुलस्क्रीन बंद करें",
            adminUser: "एडमिन यूज़र",
            administrator: "प्रशासक",
            newRecruiter: "नया रिक्रूटर रजिस्टर हुआ",
            newJobApproval: "नई जॉब अप्रूवल के लिए है",
        },
    },
    fr: {
        translation: {
            dashboard: "Tableau de bord",
            myProfile: "Mon profil",
            accountSettings: "Paramètres du compte",
            logout: "Déconnexion",
            notifications: "Notifications",
            language: "Langue",
            fullscreen: "Plein écran",
            exitFullscreen: "Quitter le plein écran",
            adminUser: "Utilisateur admin",
            administrator: "Administrateur",
            newRecruiter: "Nouveau recruteur inscrit",
            newJobApproval: "Nouvel emploi en attente d'approbation",
        },
    },
    de: {
        translation: {
            dashboard: "Dashboard",
            myProfile: "Mein Profil",
            accountSettings: "Kontoeinstellungen",
            logout: "Abmelden",
            notifications: "Benachrichtigungen",
            language: "Sprache",
            fullscreen: "Vollbild",
            exitFullscreen: "Vollbild beenden",
            adminUser: "Admin-Benutzer",
            administrator: "Administrator",
            newRecruiter: "Neuer Recruiter registriert",
            newJobApproval: "Neuer Job wartet auf Genehmigung",
        },
    },
    es: {
        translation: {
            dashboard: "Panel",
            myProfile: "Mi perfil",
            accountSettings: "Configuración de cuenta",
            logout: "Cerrar sesión",
            notifications: "Notificaciones",
            language: "Idioma",
            fullscreen: "Pantalla completa",
            exitFullscreen: "Salir de pantalla completa",
            adminUser: "Usuario administrador",
            administrator: "Administrador",
            newRecruiter: "Nuevo reclutador registrado",
            newJobApproval: "Nuevo trabajo pendiente de aprobación",
        },
    },
    ar: {
        translation: {
            dashboard: "لوحة التحكم",
            myProfile: "ملفي الشخصي",
            accountSettings: "إعدادات الحساب",
            logout: "تسجيل الخروج",
            notifications: "الإشعارات",
            language: "اللغة",
            fullscreen: "ملء الشاشة",
            exitFullscreen: "الخروج من وضع ملء الشاشة",
            adminUser: "مستخدم المسؤول",
            administrator: "المسؤول",
            newRecruiter: "تم تسجيل مسؤول توظيف جديد",
            newJobApproval: "وظيفة جديدة بانتظار الموافقة",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

i18n.on("languageChanged", (language) => {
    localStorage.setItem("jobfusion-language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
});

export default i18n;
