"use client";
import { createContext, useContext, useState, useEffect } from "react";

const translations = {
    en: {
        nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
        hero: {
            badge: "Cybersecurity Analyst",
            subtitle: "IT Coordinator | Windows Server & Active Directory | Telecommunications Analyst",
        },
        stats: { years: "Years of Experience", certifications: "Certifications" },
        about: {
            title: "About me",
            expertiseTitle: "Expertise",
            p1: "Specialist in Infrastructure and Information Security, with more than 8 years of experience implementing solutions with Cisco Switches and Routers, Fortinet and PFSense Firewalls, PRTG Monitoring, Windows and Linux Servers, VMware Virtualization and Elastix PBX.",
            p2: "Offers Consulting and Implementation services. Also provides training to companies in different areas.",
            p3: "Some of the courses and certifications:",
            certs: "CCNA • CCDA • CCNA Security • CCNP • Fortinet • Linux (LPI) • Master in Cybersecurity",
        },
        skills: {
            title: "Certifications",
            subtitle: "Institutions and organizations I've certified with",
        },
        projects: {
            title: "My Projects & Services",
            subtitle: "Cybersecurity solutions and infrastructure implementations",
            items: [
                { title: "Network Security Implementation", desc: "Design and deployment of secure network infrastructure with Cisco Switches, Fortinet Firewalls and PFSense. Implementation of segmented networks and security policies.", image: "/projects/network-security.svg" },
                { title: "Infrastructure & Monitoring", desc: "VMware virtualization environments, Windows/Linux servers, PRTG monitoring. Secure and scalable infrastructure for enterprise environments.", image: "/projects/infrastructure.svg" },
                { title: "Telecommunications & PBX", desc: "Elastix PBX implementation, Active Directory, Windows Server. Unified communications and secure telephony solutions.", image: "/projects/telecommunications.svg" },
            ],
        },
        contact: {
            title: "Let's secure",
            titlePrefix: "your ",
            titleHighlight: "infrastructure",
            titleEnd: "together",
            servicesLabel: "Services I offer:",
            services: ["Security Audit", "Network Design", "Infrastructure Consulting", "Cybersecurity Training", "Firewall Implementation", "Other"],
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            phonePlaceholder: "Your phone number",
            messagePlaceholder: "Your message",
            submit: "Submit",
            sending: "Sending...",
            success: "Message sent successfully!",
            alertFill: "Please fill out all fields.",
            alertError: "An error occurred. Please try again later.",
        },
        footer: {
            subtitle: "Cybersecurity Analyst",
            rights: "All rights reserved.",
        },
    },
    es: {
        nav: { about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
        hero: {
            badge: "Analista en Ciberseguridad",
            subtitle: "Coordinador IT | Windows Server & Active Directory | Analista de Telecomunicaciones",
        },
        stats: { years: "Años de experiencia", certifications: "Certificaciones" },
        about: {
            title: "Sobre mí",
            expertiseTitle: "Experiencia",
            p1: "Especialista en Infraestructura y Seguridad de la Información, con más de 8 años de experiencia implementando soluciones con Switches y Routers Cisco, Firewalls Fortinet y PFSense, Monitoreo PRTG, Servidores Windows y Linux, Virtualización VMware y Elastix PBX.",
            p2: "Ofrece servicios de Consultoría e Implementación. También imparte capacitación a empresas en diferentes áreas.",
            p3: "Algunos cursos y certificaciones:",
            certs: "CCNA • CCDA • CCNA Security • CCNP • Fortinet • Linux (LPI) • Master en Ciberseguridad",
        },
        skills: {
            title: "Certificaciones",
            subtitle: "Instituciones y organizaciones con las que me he certificado",
        },
        projects: {
            title: "Mis proyectos y servicios",
            subtitle: "Soluciones de ciberseguridad e implementaciones de infraestructura",
            items: [
                { title: "Implementación de Seguridad de Red", desc: "Diseño y despliegue de infraestructura de red segura con Switches Cisco, Firewalls Fortinet y PFSense. Implementación de redes segmentadas y políticas de seguridad.", image: "/projects/network-security.svg" },
                { title: "Infraestructura y Monitoreo", desc: "Entornos de virtualización VMware, servidores Windows/Linux, monitoreo PRTG. Infraestructura segura y escalable para entornos empresariales.", image: "/projects/infrastructure.svg" },
                { title: "Telecomunicaciones y PBX", desc: "Implementación Elastix PBX, Active Directory, Windows Server. Comunicaciones unificadas y soluciones de telefonía segura.", image: "/projects/telecommunications.svg" },
            ],
        },
        contact: {
            title: "Aseguremos",
            titlePrefix: "tu ",
            titleHighlight: "infraestructura",
            titleEnd: "juntos",
            servicesLabel: "Servicios que ofrezco:",
            services: ["Auditoría de seguridad", "Diseño de red", "Consultoría en infraestructura", "Capacitación en ciberseguridad", "Implementación de firewall", "Otro"],
            namePlaceholder: "Tu nombre",
            emailPlaceholder: "Tu email",
            phonePlaceholder: "Tu número de teléfono",
            messagePlaceholder: "Tu mensaje",
            submit: "Enviar",
            sending: "Enviando...",
            success: "¡Mensaje enviado correctamente!",
            alertFill: "Por favor completa todos los campos.",
            alertError: "Ocurrió un error. Por favor intenta más tarde.",
        },
        footer: {
            subtitle: "Analista en Ciberseguridad",
            rights: "Todos los derechos reservados.",
        },
    },
    fr: {
        nav: { about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
        hero: {
            badge: "Analyste en cybersécurité",
            subtitle: "Coordinateur IT | Windows Server & Active Directory | Analyste des télécommunications",
        },
        stats: { years: "Années d'expérience", certifications: "Certifications" },
        about: {
            title: "À propos de moi",
            expertiseTitle: "Expertise",
            p1: "Spécialiste en infrastructure et sécurité de l'information, avec plus de 8 ans d'expérience dans la mise en œuvre de solutions avec des commutateurs et routeurs Cisco, pare-feu Fortinet et PFSense, surveillance PRTG, serveurs Windows et Linux, virtualisation VMware et Elastix PBX.",
            p2: "Propose des services de conseil et de mise en œuvre. Dispense également des formations aux entreprises dans différents domaines.",
            p3: "Quelques cours et certifications :",
            certs: "CCNA • CCDA • CCNA Security • CCNP • Fortinet • Linux (LPI) • Master en cybersécurité",
        },
        skills: {
            title: "Certifications",
            subtitle: "Institutions et organisations avec lesquelles j'ai obtenu des certifications",
        },
        projects: {
            title: "Mes projets & services",
            subtitle: "Solutions de cybersécurité et implémentations d'infrastructure",
            items: [
                { title: "Implémentation de la sécurité réseau", desc: "Conception et déploiement d'une infrastructure réseau sécurisée avec commutateurs Cisco, pare-feu Fortinet et PFSense. Mise en place de réseaux segmentés et de politiques de sécurité.", image: "/projects/network-security.svg" },
                { title: "Infrastructure et surveillance", desc: "Environnements de virtualisation VMware, serveurs Windows/Linux, surveillance PRTG. Infrastructure sécurisée et évolutive pour environnements d'entreprise.", image: "/projects/infrastructure.svg" },
                { title: "Télécommunications et PBX", desc: "Implémentation Elastix PBX, Active Directory, Windows Server. Communications unifiées et solutions téléphoniques sécurisées.", image: "/projects/telecommunications.svg" },
            ],
        },
        contact: {
            title: "Sécurisons",
            titlePrefix: "votre ",
            titleHighlight: "infrastructure",
            titleEnd: "ensemble",
            servicesLabel: "Services proposés :",
            services: ["Audit de sécurité", "Conception réseau", "Conseil en infrastructure", "Formation cybersécurité", "Implémentation pare-feu", "Autre"],
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email",
            phonePlaceholder: "Votre numéro de téléphone",
            messagePlaceholder: "Votre message",
            submit: "Envoyer",
            sending: "Envoi en cours...",
            success: "Message envoyé avec succès !",
            alertFill: "Veuillez remplir tous les champs.",
            alertError: "Une erreur s'est produite. Veuillez réessayer plus tard.",
        },
        footer: {
            subtitle: "Analyste en cybersécurité",
            rights: "Tous droits réservés.",
        },
    },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const saved = localStorage.getItem("portfolio-lang");
        if (saved && ["en", "es", "fr"].includes(saved)) setLang(saved);
    }, []);

    const setLanguage = (l) => {
        setLang(l);
        localStorage.setItem("portfolio-lang", l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLanguage, t: translations[lang] || translations.en, }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
