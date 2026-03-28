import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Award,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  User,
  Cpu, 
  Palette,
  Sparkles,
  Send,
  Bot,
  MessageSquare,
  Loader2,
  RefreshCw,
  Zap,
  MousePointer2,
  Search,
  Globe,
  Layers,
  CheckCircle2,
  Star,
  Building2,
  GraduationCap,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Check,
  Facebook,
  Instagram,
  PenTool,
  Languages,
  Monitor,
  Clock,
  Quote,
  MoveRight,
  ArrowLeft,
  Copy,
  Eye,
  MapPin,
  Image as ImageIcon,
  Trophy,
  MessageCircle
} from 'lucide-react';

// --- Global Data & Constants ---

const apiKey = ""; // Runtime environment handles this

const whatsappLink = "https://wa.me/8801966560165";
const instagramLink = "https://www.instagram.com/prodiproy1222/";
const facebookLink = "https://web.facebook.com/prodiproy1222";
const linkedinLink = "https://www.linkedin.com/in/prodip-roy-024648211/";
const upworkLink = "https://www.upwork.com/freelancers/~01a97834a2908979e9";
const fiverrLink = "https://www.fiverr.com/prodiproy594/";

const fiverrLogo = "https://images.seeklogo.com/logo-png/37/1/fiverr-logo-png_seeklogo-376328.png";
const upworkLogo = "https://cdn.freebiesupply.com/logos/large/2x/upwork-logo-png-transparent.png";

const formAction = "https://formspree.io/f/mojkoygl"; 

const skillsData = [
  { name: 'Email Ecosystem', icon: Mail, items: ['Mailchimp Specialist', 'Mailjet Expert', 'HubSpot CRM', 'MailerLite Designer', 'Klaviyo Flows'] },
  { name: 'Dev & Design', icon: Code, items: ['Figma to HTML', 'MJML / HubL', 'Hand-coded CSS', 'Modular Templates', 'React Integration'] },
  { name: 'Strategic Growth', icon: TrendingUp, items: ['Deliverability Audit', 'Inbox Placement', 'A/B Testing', 'Automation Logic', 'Conversion Opt.'] },
  { name: 'AI Solutions', icon: Cpu, items: ['Workflow Integration', 'AI Scripting', 'API Automation', 'Business Efficiency'] }
];

const projectsData = [
  { 
    id: 'yoga-retreat', 
    title: 'Yoga Marrakech Retreat', 
    category: 'email', 
    description: 'Premium Mailchimp campaign for Yoga w Manasi with mosaic gallery and urgency banners.', 
    image: 'https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/31aead2b-735d-14f7-bb5e-74012e060ae2.png', 
    tech: ['Mailchimp', 'Campaign', 'Design'],
    code: `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="x-apple-disable-message-reformatting"> 
    <title>Yoga w Manasi - Soft Flow</title>
    
    <!--[if mso]>
        <style>
            * {
                font-family: Georgia, serif !important;
            }
        </style>
    <![endif]-->
    
    <!-- Google Fonts (Hidden from Outlook) -->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Della+Respira&display=swap" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Della+Respira&display=swap');
    </style>
    <!--<![endif]-->

    <style>
        /* CSS Reset */
        html, body { margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important; background-color: #F9F7F5; }
        * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
        div[style*="margin: 16px 0"] { margin: 0 !important; }
        table, td { mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; }
        table { border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important; }
        img { -ms-interpolation-mode:bicubic; }
        
        /* iOS Blue Link Fix */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* Mobile Responsive Styles */
        @media screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: auto !important; }
            .stack-column, .stack-column-center { display: block !important; width: 100% !important; max-width: 100% !important; direction: ltr !important; }
            .stack-column-center { text-align: center !important; }
            .center-on-mobile { text-align: center !important; }
            .fluid-img { width: 100% !important; max-width: 100% !important; height: auto !important; }
            .mobile-padding { padding: 30px 20px !important; }
            .mobile-hide { display: none !important; }
            .h1-mobile { font-size: 28px !important; line-height: 38px !important; }
            .wrapper-padding { padding: 25px 20px !important; }
        }

        /* Hover Effects */
        .btn-hover:hover { opacity: 0.9 !important; transform: translateY(-1px); }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F9F7F5;">
    <center style="width: 100%; background-color: #F9F7F5;">
    
        <!-- PREVIEW TEXT -->
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            December arrives like a hush. Plus: Marrakech Retreat & 2026 Teacher Trainings inside.
        </div>

        <!-- MAIN EMAIL CONTAINER -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto;" class="email-container">
            
            <!-- HEADER (Logo) -->
            <tr>
                <td style="padding: 40px 0 30px 0; text-align: center;">
                    <a href="https://www.yogawithmanasi.com/" target="_blank" style="text-decoration: none;">
                        <img src="https://sawa-dev-2-storage-bucket.storage.googleapis.com/profiles/yguepz6kkkarwxxv-cd3e8.png" width="140" alt="Yoga w Manasi" style="width: 140px; max-width: 140px; height: auto; display: block; margin: 0 auto; border: 0;">
                    </a>
                </td>
            </tr>

            <!-- MAIN CARD (Rounded Corners for Softness) -->
            <tr>
                <td style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.05);">
                    
                    <!-- HERO IMAGE (Rounded Bottom for Flow) -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 15px 15px 0 15px;">
                                <!-- Replace text=... with your actual image -->
                                <img src="https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/52fee64e-8b15-32df-7436-17173b327fe3.jpeg" width="570" height="" alt="December Stillness" border="0" style="width: 100%; max-width: 570px; height: auto; border-radius: 16px 16px 0 0; display: block;" class="fluid-img">
                            </td>
                        </tr>
                    </table>

                    <!-- INTRO TEXT -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 50px 50px 30px 50px; font-family: 'Alegreya', Georgia, serif; font-size: 18px; line-height: 32px; color: #4A5568; text-align: center;" class="mobile-padding">
                                <h2 class="h1-mobile" style="margin: 0 0 25px; font-family: 'Della Respira', Georgia, serif; font-size: 32px; line-height: 42px; color: #016e8f;">A hush that opens the heart.</h2>
                                
                                <p style="margin: 0 0 20px;">Dear wonderful being,</p>
                                
                                <p style="margin: 0 0 20px;">December arrives like a hush. It’s the month of thresholds. Of long nights that ask us to rest deeper. We begin to sense what wants to be gathered close, and what is ready to be set down.</p>
                                
                                <p style="margin: 0 0 20px;">This newsletter is an invitation—a gentle gathering of ways to meet yourself again this month.</p>
                                
                                <p style="margin: 0 0 20px; font-style: italic; color: #13bfb1;">So chai up, settle in, and read on.</p>
                                
                                <!-- Soft Divider Symbol -->
                                <p style="margin: 30px 0 0; color: #016e8f; font-size: 24px;">~</p>
                            </td>
                        </tr>
                    </table>

                    <!-- SUB-HEADER -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 0 20px 20px 20px; text-align: center;">
                                <h3 style="margin: 0; font-family: 'Della Respira', Georgia, serif; font-size: 22px; color: #016e8f;">Unfolding at Macha Yoga</h3>
                                <p style="margin: 8px 0 0; font-family: sans-serif; font-size: 11px; color: #99AAB5; text-transform: uppercase; letter-spacing: 2px;">Bray • December</p>
                            </td>
                        </tr>
                    </table>

                    <!-- EVENTS (Soft Background Cards) -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 20px 25px 40px 25px;" align="center" class="mobile-padding">
                                <!-- Ghost Table for Outlook -->
                                <!--[if mso]>
                                <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%">
                                <tr>
                                <td valign="top" width="275">
                                <![endif]-->
                                
                                <!-- KIRTAN CARD -->
                                <div style="display:inline-block; margin: 10px; width:100%; max-width:250px; vertical-align:top;" class="stack-column-center">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="background-color: #E6F7F6; border-radius: 16px; padding: 25px; text-align: center;">
                                                <img src="https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/39b97226-ec9d-2774-a273-dbe9caa19bb4.png" width="200" alt="Kirtan" style="width: 100%; max-width: 200px; height: auto; border-radius: 50%; margin-bottom: 20px;" class="fluid-img">
                                                
                                                <p style="margin: 0 0 10px; font-family: sans-serif; font-size: 11px; font-weight: bold; color: #13bfb1; text-transform: uppercase; letter-spacing: 1px;">Sat 6 Dec • 7 PM</p>
                                                <h4 style="margin: 0 0 10px; font-family: 'Della Respira', Georgia, serif; font-size: 18px; color: #016e8f;">Chant from Your Heart</h4>
                                                <p style="margin: 0 0 20px; font-family: 'Alegreya', Georgia, serif; font-size: 15px; line-height: 22px; color: #4A5568;">Connect with the right souls, chant to heal our voices.</p>
                                                <a href="#" style="color: #016e8f; font-family: sans-serif; font-size: 12px; font-weight: bold; text-decoration: none; border: 1px solid #016e8f; padding: 8px 16px; border-radius: 20px; display: inline-block;">Book Kirtan</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                
                                <!--[if mso]>
                                </td>
                                <td valign="top" width="275">
                                <![endif]-->
                                
                                <!-- MOON CARD -->
                                <div style="display:inline-block; margin: 10px; width:100%; max-width:250px; vertical-align:top;" class="stack-column-center">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="background-color: #E6F7F6; border-radius: 16px; padding: 25px; text-align: center;">
                                                <img src="https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/09ee98dd-7df0-a351-f936-680f90955794.png" width="200" alt="New Moon" style="width: 100%; max-width: 200px; height: auto; border-radius: 50%; margin-bottom: 20px;" class="fluid-img">
                                                
                                                <p style="margin: 0 0 10px; font-family: sans-serif; font-size: 11px; font-weight: bold; color: #13bfb1; text-transform: uppercase; letter-spacing: 1px;">Fri 19 Dec • 7:30 PM</p>
                                                <h4 style="margin: 0 0 10px; font-family: 'Della Respira', Georgia, serif; font-size: 18px; color: #016e8f;">New Moon Circles</h4>
                                                <p style="margin: 0 0 20px; font-family: 'Alegreya', Georgia, serif; font-size: 15px; line-height: 22px; color: #4A5568;">Weave together movement, breath, and intention.</p>
                                                <a href="#" style="color: #016e8f; font-family: sans-serif; font-size: 12px; font-weight: bold; text-decoration: none; border: 1px solid #016e8f; padding: 8px 16px; border-radius: 20px; display: inline-block;">Book Moon</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                
                                <!--[if mso]>
                                </td>
                                </tr>
                                </table>
                                <![endif]-->
                            </td>
                        </tr>

                        <!-- YIN REVIVE (Wide Soft Card) -->
                        <tr>
                            <td style="padding: 0 45px 50px 45px;" class="mobile-padding">
                                <div style="background-color: #FDFBF7; border-radius: 16px; border: 1px solid #EAEAEA;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 35px; text-align: center;" class="wrapper-padding">
                                                <p style="margin: 0 0 10px; font-family: sans-serif; font-size: 11px; font-weight: bold; color: #13bfb1; text-transform: uppercase; letter-spacing: 2px;">Wednesdays 11:15 AM</p>
                                                <h3 style="margin: 0 0 15px; font-family: 'Della Respira', Georgia, serif; font-size: 24px; color: #016e8f;">Yin REVIVE</h3>
                                                <p style="margin: 0 0 20px; font-family: 'Alegreya', Georgia, serif; font-size: 16px; line-height: 26px; color: #4A5568;">
                                                    A mid-week shake out! Refreshing body and mind with a blend of Yin Yoga and Qi Gong.
                                                </p>
                                                <a href="#" style="font-size: 13px; font-family: sans-serif; color: #ffffff; text-decoration: none; background-color: #13bfb1; padding: 10px 25px; border-radius: 30px; display: inline-block; font-weight: bold;">Book Your Spot</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <p style="margin: 40px 0 0; color: #016e8f; font-size: 24px; text-align: center;">~</p>
                            </td>
                        </tr>

                        <!-- TEACHER TRAINING (Centered & Clean) -->
                        <tr>
                            <td style="padding: 0 40px 40px 40px;" class="mobile-padding">
                                <h3 style="margin: 0 0 30px; font-family: 'Della Respira', Georgia, serif; font-size: 22px; color: #016e8f; text-align: center; letter-spacing: 1px;">Teacher Trainings</h3>
                                
                                <!-- 200 HR -->
                                <div style="border: 1px solid #E6F7F6; border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 25px;">
                                    <h4 style="margin: 0 0 10px; font-family: 'Della Respira', Georgia, serif; font-size: 22px; color: #333333;">Foundational 200 Hours</h4>
                                    <p style="margin: 0 0 15px; font-family: sans-serif; font-size: 11px; font-weight: bold; color: #13bfb1; text-transform: uppercase; letter-spacing: 1px;">Sept 2026 | Dublin</p>
                                    <p style="margin: 0 0 20px; font-family: 'Alegreya', Georgia, serif; font-size: 15px; color: #4A5568;">Authentic Teachings • Energetic Approach • Trauma Informed</p>
                                    <a href="mailto:sahajaschoolofyoga@gmail.com" style="color: #016e8f; font-family: sans-serif; font-size: 13px; font-weight: bold; text-decoration: underline;">Express Interest</a>
                                </div>

                                <!-- 50 HR -->
                                <div style="background-color: #F4FAFB; border-radius: 16px; padding: 30px; text-align: center;">
                                    <h4 style="margin: 0 0 10px; font-family: 'Della Respira', Georgia, serif; font-size: 20px; color: #333333;">YIN WITHIN - 50 Hrs</h4>
                                    <p style="margin: 0 0 15px; font-family: sans-serif; font-size: 11px; font-weight: bold; color: #13bfb1; text-transform: uppercase; letter-spacing: 1px;">Feb - April 2026 | Bray</p>
                                    <p style="margin: 0 0 20px; font-family: 'Alegreya', Georgia, serif; font-size: 15px; color: #4A5568;">Roots of Yin, Meridians, Chakras & Alchemy of Stillness.</p>
                                    <a href="mailto:yogawithmanasi1@gmail.com" style="color: #016e8f; font-family: sans-serif; font-size: 13px; font-weight: bold; text-decoration: underline;">Get Details</a>
                                </div>
                            </td>
                        </tr>

                        <!-- RETREAT (Rounded Card Float) -->
                        <tr>
                            <td style="padding: 10px 20px 50px 20px;" class="mobile-padding">
                                <div style="background-color: #016e8f; border-radius: 20px; overflow: hidden;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 40px;" class="wrapper-padding">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tr>
                                                        <!-- Text -->
                                                        <td valign="middle" class="stack-column-center" width="60%" style="padding-right: 20px;">
                                                            <p style="margin: 0 0 10px; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #9dd8d6; text-transform: uppercase; letter-spacing: 1px;">14 - 21 Feb 2026</p>
                                                            <h3 style="margin: 0 0 15px; font-family: 'Della Respira', Georgia, serif; font-size: 24px; color: #ffffff;">Spring Forward in Marrakech</h3>
                                                            <p style="margin: 0 0 25px; font-family: 'Alegreya', Georgia, serif; font-size: 15px; line-height: 24px; color: #E0F7FA;">
                                                                Immersed in colors, scents, and rhythms. Nourishing meals, daily practice, and rest.
                                                            </p>
                                                            <a href="mailto:yogawithmanasi1@gmail.com" style="background-color: #ffffff; color: #016e8f; font-family: sans-serif; font-size: 13px; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 30px; display: inline-block;">Get Info</a>
                                                        </td>
                                                        <!-- Image -->
                                                        <td valign="middle" class="stack-column-center" width="40%">
                                                            <div style="margin-top: 0;">
                                                                <img src="https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/a7acb259-a0c0-6943-2340-e75f202bb001.png" width="180" alt="Marrakech" style="width: 100%; max-width: 180px; height: auto; border-radius: 50%; border: 3px solid rgba(255,255,255,0.2); margin-top: 20px;" class="fluid-img">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>

                    </table>
                    <!-- END CONTENT -->
                    
                </td>
            </tr>

            <!-- FOOTER -->
            <tr>
                <td style="padding: 40px 20px; font-family: 'Alegreya', Georgia, serif; font-size: 14px; line-height: 24px; color: #8899A6; text-align: center;">
                    <p style="margin: 0 0 10px; color: #13bfb1;">~ Weekly Public Classes ~</p>
                    <p style="margin: 0 0 20px;">
                        Mon/Wed 10am @ Macha Yoga • Tue Evening @ Mandala Yoga<br>
                        Wed 11:15am @ Macha Yoga • Wed 8pm Online
                    </p>
                    
                    <p style="margin: 0 0 20px; font-size: 16px; color: #333333;">
                        Much Love, Le Grá! Jai Ma!<br>
                        <strong>M A N A S I</strong>
                    </p>
                    
                    <p style="margin: 30px 0 0; font-size: 12px;">
                        <a href="#" style="color: #8899A6; text-decoration: underline;">Unsubscribe</a> | <a href="#" style="color: #8899A6; text-decoration: underline;">Browser</a>
                    </p>
                </td>
            </tr>

        </table>
    </center>
</body>
</html>`
  },
  { 
    id: 'hubspot-automation', 
    title: 'HubSpot Investor Journey', 
    category: 'automation', 
    description: 'Complex lead nurturing and deal pipeline automation setup for Syndi.fi investors.', 
    image: 'https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/6afedd6c-ee47-a168-64a0-0c53603ea245.png', 
    tech: ['HubSpot', 'Automation', 'CRM'],
    code: `
<!doctype html>
<html lang="ro" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>Ai un plan de backup dacă piața imobiliară pică?</title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      height: 100% !important;
      width: 100% !important;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .cta-button:hover {
      background-color: #e5992e !important;
    }

    @media only screen and (max-width:480px) {
      .container-table {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .mobile-stack {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        border-left: none !important;
      }
      
      .mobile-padding {
        padding-left: 5px !important;
        padding-right: 5px !important;
      }

      .h1-mobile {
        font-size: 26px !important;
        line-height: 32px !important;
      }
      .h2-mobile {
        font-size: 28px !important;
        line-height: 34px !important;
      }
      .h3-mobile {
        font-size: 22px !important;
        line-height: 28px !important;
      }
      .text-large-mobile {
        font-size: 28px !important;
        line-height: 1.2 !important;
      }
      .body-text-mobile {
        font-size: 15px !important;
        line-height: 1.5 !important;
      }

      .mobile-margin-top {
        margin-top: 25px !important;
        padding-top: 25px !important;
        border-top: 2px solid #F3F4F7 !important;
      }

      .header-spacing {
        padding-bottom: 120px !important;
      }
    }
  </style>
  <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body style="word-spacing:normal;background-color:#082059;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div aria-roledescription="email" style="background-color:#082059;" role="article" lang="ro" dir="auto">

    <!-- SPACER TOP -->
    <div style="margin:0px auto;max-width:600px; height: 30px; font-size: 1px; line-height: 1px;">&nbsp;</div>

    <!-- 1. HEADER CARD -->
    <div class="container-table" style="margin:0px auto;max-width:600px;background-color:#ffffff;border-radius:18px;overflow:hidden;">
      <!--[if gte mso 9]>
      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:420px;">
        <v:fill type="tile" src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/Group%20200.png" color="#ffffff" />
        <v:textbox inset="0,0,0,0">
      <![endif]-->
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%; background-image: url('https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/Group%20200.png'); background-size: cover; background-position: center bottom; background-repeat: no-repeat; background-color: #ffffff; border-radius: 18px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                <tbody>
                  <tr>
                    <td align="center" style="font-size:0px;padding:30px 25px 15px 25px;word-break:break-word;">
                      <img src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/logo%20(3).png" width="110" alt="syndifi" style="border:0; display:block;">
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 40px 180px 40px;word-break:break-word;" class="mobile-padding header-spacing">
                      <div style="font-family: 'Montserrat', Arial, Helvetica, sans-serif;font-size:32px;line-height:40px;text-align:center;color:#0D57BA;font-weight:900;">
                        <h1 style="margin: 0; font-family:'Montserrat', Arial, sans-serif; font-size: 32px; line-height: 40px; color:#0D57BA; font-weight: 900;" class="h1-mobile">Ai un plan de backup <br> dacă piața imobiliară <br> pică?</h1>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if gte mso 9]>
        </v:textbox>
      </v:rect>
      <![endif]-->
    </div>

    <!-- 2 & 3. MAIN BODY SECTION -->
    <div class="container-table" style="background:#F3F4F7;background-color:#F3F4F7;margin:30px auto 0 auto;max-width:600px; border-radius: 18px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F3F4F7;background-color:#F3F4F7;width:100%; border-radius: 18px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0 0 0;text-align:center;">
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <!-- INTRO TEXT SECTION -->
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;word-break:break-word;" class="mobile-padding">
                        <div style="font-family: 'Montserrat', Arial, sans-serif;font-size:16px;line-height:22px;text-align:left;color:#082059; background-color: #ffffff; padding: 10px 25px; border-radius: 18px;" class="body-text-mobile">
                          <p style="line-height: normal; margin: 10px 0; text-align: left; color:#082059; font-size: 16px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 500; mso-line-height-rule: exactly;">Salut, <br> <br> Imaginează-ți următorul scenariu. Ai cumpărat un apartament acum 2-3 ani. Prețurile creșteau. Toată lumea cumpăra. Era „momentul bun”. <br> Astăzi, tranzacțiile încep să scadă. <br> În 2025, la nivel național, s-au înregistrat mai puține vânzări decât în 2024. <br> În București-Ilfov, scăderea a fost de aproape 8,5%.</p>
                        </div>
                      </td>
                    </tr>

                    <!-- HIGHLIGHT TEXT SECTION -->
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;word-break:break-word;" class="mobile-padding">
                        <div style="font-family: 'Montserrat', Arial, sans-serif;font-size:30px;line-height:1.2;text-align:left;color:#55575d; background-color: #F3F4F7; padding: 15px 25px; border-radius: 18px;">
                          <p style="line-height: normal; margin: 10px 0; text-align: center; color:#082059; font-size: 35px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 900; mso-line-height-rule: exactly;" class="text-large-mobile">Nu e panică.</p> 
                          <p style="line-height: normal; margin: 10px 0; text-align: center; color:#082059; font-size: 35px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 600; mso-line-height-rule: exactly;" class="text-large-mobile">Dar nici euforie nu mai e.</p> 
                          <p style="line-height: normal; margin: 10px 0; text-align: center; color:#082059; font-size: 16px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 500; mso-line-height-rule: exactly;" class="body-text-mobile">Între timp, prețurile au rămas sus. Chiriile au crescut… dar nu în același ritm. Asta înseamnă ceva simplu și periculos: randamentele s-au comprimat. <br> <br> Un apartament care părea atractiv la 5-6% brut acum câțiva ani, astăzi ajunge în multe cazuri la 3-4% brut. Iar din acel procent scazi taxe, perioade fără chiriaș, reparații, inflație.</p>
                        </div>
                      </td>
                    </tr>

                    <!-- MARKET ANALYSIS SECTION -->
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:30px;word-break:break-word;" class="mobile-padding">
                        <div style="font-family: 'Montserrat', Arial, sans-serif; background-color: #ffffff; padding: 40px 30px; border-radius: 18px;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td class="mobile-stack" width="46%" style="vertical-align: middle; padding-right: 25px;">
                                <p style="margin: 0; color: #082059; font-size: 24px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 700; line-height: 1.2;" class="h3-mobile">
                                  Acum întrebarea reală: Dacă piața scade 15-20%, cum arată investiția ta?
                                </p>
                              </td>
                              <td class="mobile-stack mobile-margin-top" width="54%" style="vertical-align: middle; border-left: 2px solid #F3F4F7; padding-left: 30px;">
                                <p style="margin: 0 0 20px 0; color: #082059; font-size: 16px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 500; line-height: 1.4; mso-line-height-rule: exactly;" class="body-text-mobile">
                                  Mai produce suficient cât să o ții fără stres? <br>
                                  Sau devine o speranță legată de „poate își revine”?
                                </p>
                                <p style="margin: 0 0 20px 0; color: #082059; font-size: 16px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 500; line-height: 1.4; mso-line-height-rule: exactly;" class="body-text-mobile">
                                  Și dacă tranzacțiile continuă să încetinească, unde îți vei muta capitalul?
                                </p>
                                <p style="margin: 0; color: #082059; font-size: 16px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 500; line-height: 1.4; mso-line-height-rule: exactly;" class="body-text-mobile">
                                  Majoritatea investitorilor nu au un plan de backup. <br>
                                  Au doar un plan de creștere.
                                </p>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4. CALL TO ACTION AREA -->
    <div class="container-table" style="margin:0px auto;max-width:600px; padding: 45px 0 55px 0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td align="center" style="padding: 0 40px;" class="mobile-padding">
              <div style="font-family: 'Montserrat', Arial, Helvetica, sans-serif;text-align:center;">
                <h2 style="margin: 0; color:#ffffff; font-size: 34px; font-weight: 900;" class="h2-mobile">Vrei să discutăm aplicat?</h2> 
                <p style="margin: 15px 0 30px 0; color:#ffffff; font-size: 16px; font-weight: 500; line-height: 1.4;">Află despre cum ar trebui să arate un portofoliu pregătit pentru o corecție, poți programa o conversație cu unul dintre consultanții</p>
              </div>
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto;">
                <tr>
                  <td align="center" bgcolor="#f2a93b" style="border-radius:10px;background:#f2a93b;">
                    <a href="https://meetings-eu1.hubspot.com/valentin14/valentin-discovery" style="display: inline-block; background: #f2a93b; color: #082059; font-family: 'Montserrat', Arial, sans-serif; font-size: 20px; font-weight: 800; text-decoration: none; padding: 16px 40px; border-radius: 10px;" target="_blank">Programează o discuție</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5. FOOTER CARD SECTION -->
    <div class="container-table" style="margin:0 auto;max-width:600px; border-radius: 18px; overflow: hidden; background-color: #F3F4F7;">
      <!--[if gte mso 9]>
      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:650px;">
        <v:fill type="tile" src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/gradient%20mask%20(3).png" color="#F3F4F7" />
        <v:textbox inset="0,0,0,0">
      <![endif]-->
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%; background-image: url('https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/gradient%20mask%20(3).png'); background-size: cover; background-position: center bottom; background-repeat: no-repeat; background-color: #F3F4F7; border-radius: 18px;">
        <tbody>
          <tr>
            <td style="padding: 55px 30px 45px 30px;" class="mobile-padding" align="center">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="padding-bottom: 30px;">
                        <div style="font-family: 'Montserrat', Arial, Helvetica, sans-serif; color:#0D57BA;">
                          <h3 style="margin: 0 0 20px 0; text-align: center; color:#0D57BA; font-size: 26px; font-weight: 800; line-height: 1.2;" class="h3-mobile">Pentru că nu toate activele reacționează la fel.</h3> 
                          <p style="margin: 0; text-align: center; color:#0D57BA; font-size: 15px; font-weight: 500; line-height: 1.6;" class="body-text-mobile">În următorul email vom compara mai multe tipuri de investiții imobiliare și vom vedea care rezistă mai bine când piața intră în blocaj.</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="padding-bottom: 40px;">
                        <p style="margin: 0 0 10px 0; text-align: center; color:#0D57BA; font-size: 15px; font-weight: 600; font-family: 'Montserrat', Arial, sans-serif;">Pe curând,</p>
                        <img src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/logo%20(3).png" width="80" alt="syndifi" style="display: block; border: 0; margin: 0 auto;">
                      </td>
                    </tr>
                    
                    <!-- REBUILT SOCIAL CARD FOR PERFECT ROUNDING -->
                    <tr>
                      <td align="center" style="padding: 0;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 18px; border-collapse: separate;">
                          <tbody>
                            <tr>
                              <td align="center" style="padding: 35px 20px 15px 20px; border-radius: 18px 18px 0 0;">
                                <div style="text-align: center;">
                                  <a style="display:inline-block; margin: 0 12px; text-decoration: none;" href="https://www.linkedin.com/company/syndifi/" target="_blank"><img width="40" src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/Frame%20282.png" alt="LinkedIn"></a> 
                                  <a style="display:inline-block; margin: 0 12px; text-decoration: none;" href="https://www.instagram.com/syndi.fi/" target="_blank"><img width="40" src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/Frame%20281.png" alt="Instagram"></a> 
                                  <a style="display:inline-block; margin: 0 12px; text-decoration: none;" href="https://www.linkedin.com/company/syndifi/" target="_blank"><img width="40" src="https://49224040.fs1.hubspotusercontent-eu1.net/hubfs/49224040/Email%20Components/Frame%20280.png" alt="Facebook"></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding: 0 40px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                  <tr>
                                    <td style="border-top: 1px solid #f2a93b; font-size: 1px; line-height: 1px;">&nbsp;</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding: 25px 35px 35px 35px; border-radius: 0 0 18px 18px;" class="mobile-padding">
                                <div style="font-family: 'Montserrat', Arial, sans-serif; font-size: 11px; color: #0D57BA; text-align: center; font-weight: 500; line-height: 1.5;">
                                  <p style="line-height: 1.4; margin: 0; color: #0D57BA;">*Prezenta comunicare are exclusiv scop informativ și educativ, investițiile se vor putea realiza doar după obținerea de către societatea noastră a autorizației de furnizor de crowdfunding din partea A.S.F., momentan societatea fiind în cursul procesului de autorizare, încă nefinalizat.</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if gte mso 9]>
        </v:textbox>
      </v:rect>
      <![endif]-->
    </div>

    <!-- 6. LEGAL FOOTER -->
    <div class="container-table" style="margin:0px auto;max-width:600px;padding: 30px 0 40px 0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td align="center" style="font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size: 11px; color: #ffffff; line-height: 1.5;">
              <p style="margin: 0;">Syndifi | București, România</p>
              <p style="margin: 8px 0 0 0;">
                <a href="#" style="color: #ffffff; text-decoration: underline;">Dezabonare</a> | 
                <a href="#" style="color: #ffffff; text-decoration: underline;">Gestionare preferințe</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</body>

</html>`
  },
  { 
    id: 'lotessa-welcome', 
    title: 'Lotessa Welcome Series', 
    category: 'email', 
    description: 'Multi-stage onboarding HTML template for Lotessa on Mailjet, optimized for user retention.', 
    image: 'https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/55b1a4e3-a9cc-1f4a-1af6-155bf89ea23c.jpeg', 
    tech: ['Mailjet', 'MJML', 'Onboarding'],
    code: `<!DOCTYPE html>
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <title>You're in -- welcome to Lotessa</title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a { padding: 0; }
    body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #F4F4F4; }
    table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    p { display: block; margin: 13px 0; }
  </style>
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 { width: 100% !important; max-width: 100%; }
      .mj-column-per-50 { width: 50% !important; max-width: 50%; }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:479px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  </style>
</head>
<body style="word-spacing:normal;background-color:#F4F4F4;">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    We're so glad you're here. Let's start your journey!
  </div>
  <div style="background-color:#F4F4F4;" role="main">
    
    <!-- Logo Header -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:30px 0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:200px;">
                                <a href="https://www.lotessa.app/" target="_blank">
                                  <img alt="Lotessa" src="https://124gz.mjt.lu/img2/124gz/aa943c9c-9e56-4665-87c3-9de8ae68f20c/content" style="border:none;display:block;outline:none;text-decoration:none;height:37px;width:100%;font-size:13px;" width="200" height="37">
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->

    <!-- Hero Section -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" bgcolor="#2fb4a5" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#2fb4a5;background-color:#2fb4a5;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#2fb4a5;background-color:#2fb4a5;width:100%;">
        <tbody>
          <tr>
            <td style="direction:rtl;font-size:0px;padding:5px 0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 0px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile">
                          <tbody>
                            <tr>
                              <td style="width:300px;" class="mj-full-width-mobile">
                                <img alt="" src="https://124gz.mjt.lu/img2/124gz/9a3c69ec-5e65-4b47-bbc5-14a3d7c7b0fb/content" style="border:none;border-radius:25px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" height="auto">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td style="vertical-align:middle;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0px 25px;word-break:break-word;">
                        <div style="font-family:'Sora', Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:left;color:#000000;">
                          <h1 style="line-height:30px; margin: 10px 0; font-weight: normal; color:#ffffff; font-size:24px;"><b>You're in -- welcome to Lotessa</b></h1>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->

    <!-- Main Content -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:'Sora', Helvetica, Arial, sans-serif;font-size:16px;line-height:28px;text-align:left;color:#000000;">
                          <p style="margin: 10px 0;">Hi there,</p>
                          <p style="margin: 10px 0;">Welcome to Lotessa -- we're so glad you're here.</p>
                          <p style="margin: 10px 0;">You've just joined a community of people on GLP-1 medications who are taking their health into their own hands. That's no small thing, and we want to support every step of the journey.</p>
                          <p style="margin: 10px 0;">Lotessa is your space to track how you're feeling, manage your medication, and get the aftercare support you actually deserve -- all in one place.</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->

    <!-- Checklist & CTA -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" bgcolor="#f6f8f7" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#f6f8f7;background-color:#f6f8f7;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f6f8f7;background-color:#f6f8f7;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:'Sora', Helvetica, Arial, sans-serif;font-size:14px;line-height:28px;text-align:left;color:#000000;">
                          <h2 style="margin-top: 10px; font-weight: bold; color:#2FB4A5; font-size:18px;">Here's what you can do right now:</h2>
                          <p style="margin: 10px 0;"><span style="color:#ff8a73;">→</span> Open the app and set up your profile</p>
                          <p style="margin: 10px 0;"><span style="color:#ff8a73;">→</span> Add your medication and dosage details</p>
                          <p style="margin: 10px 0;"><span style="color:#ff8a73;">→</span> Log how you're feeling today -- even just a quick note counts</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" vertical-align="middle" style="font-size:0px;padding:20px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                          <tbody>
                            <tr>
                              <td align="center" bgcolor="#ff8a73" role="presentation" style="border:none;border-radius:12px;cursor:auto;background:#ff8a73;" valign="middle">
                                <a href="https://www.lotessa.app/" style="display:inline-block;background:#ff8a73;color:#ffffff;font-family:'Sora', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:16px 25px;border-radius:12px;" target="_blank">
                                  Get Started Now
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->

    <!-- Footer Note -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:'Sora', Helvetica, Arial, sans-serif;font-size:16px;line-height:28px;text-align:left;color:#000000;">
                          <p style="margin: 10px 0;">One more thing -- Lotessa is a web app, but you can save it to your phone's home screen for easy access, just like an app. We'll show you exactly how in your next email.</p>
                          <p style="margin: 10px 0;">Your free year of Lotessa starts now. No pressure, no rush -- just take it one step at a time.</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->

    <!-- Sign-off -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:'Sora', Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:left;color:#55575d;">
                          <p style="margin: 10px 0;">Warm wishes,</p>
                          <p style="margin: 10px 0; font-size: 20px; color: #55575d;"><b>The Lotessa Team</b></p>
                          <p style="margin: 10px 0;">www.lotessa.app</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->

    <!-- Legal Footer -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:30px 0px 20px 0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:center;color:#666666;">
                          <p style="margin: 10px 0;">This message was sent to [[EMAIL_TO]]. To stop receiving emails from this series, <a style="color:#2FB4A5;text-decoration:underline;" target="_blank" href="[[WORKFLOW_EXIT_LINK_EN_US]]">click here</a>. To unsubscribe from all marketing emails, <a style="color:#2FB4A5;text-decoration:underline;" target="_blank" href="[[UNSUB_ALL_LINK_EN_US]]">click here</a>.</p>
                          <p style="margin: 10px 0;">8 Delphinium Grove LS16 8FU Leeds GB</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>
</html>`
  },
  { 
    id: 'arnold-logan', 
    title: 'Arnold Logan Official', 
    category: 'web', 
    description: 'Elite personal branding website with premium UI and Authorship focus.', 
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200', 
    tech: ['Web Design', 'UI/UX'],
    url: 'https://arnoldlogan.com/'
  }
];

const testimonialsData = [
  { id: 1, name: "pixonative", location: "Belgium", text: "good work as always. Fast and reliable delivery with great attention to detail.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 2, name: "stehanhuber", location: "Germany", text: "Es war mir ein Vergnügen, mit Prodip R zusammenzuarbeiten, und ich freue mich auf zukünftige Partnerschaften.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 3, name: "jonathanan", location: "Israel", text: "Great seller will purchase your services again. High quality work and professional attitude.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 4, name: "belfast6789", location: "Canada", text: "He was polite, patient and delivered on time.....made the interaction smooth ...highly recommend ...second time I have worked with him.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 5, name: "Paystubs.net", location: "United States", text: "Prodip consistently delivered email templates on time and was reliable throughout our engagement.", stars: 5, platform: "Upwork", category: "Mailchimp Specialist" },
  { id: 6, name: "vmaior", location: "Romania", text: "Great job. We managed to deliver on time and on budget. Prodip was open to feedback.", stars: 5, platform: "Fiverr", category: "Email Design" }
];

// --- Sub-Components ---

const BrandLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-amber-500 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] overflow-hidden group shrink-0 text-white">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
      <span className="text-black font-black text-base md:text-xl italic tracking-tighter z-10 font-poppins">PR</span>
      <div className="absolute -bottom-1 -right-1 bg-black p-0.5 rounded-tl-lg">
        <Zap size={10} className="text-amber-500 fill-amber-500" />
      </div>
    </div>
    <div className="flex flex-col leading-none text-left font-poppins text-white">
      <span className="text-sm md:text-lg font-black tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">Prodip</span>
      <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">Expert</span>
    </div>
  </div>
);

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  return (
    <div className={`relative bg-white/5 overflow-hidden w-full h-48 md:h-64 ${className}`}>
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-500 bg-[#111]">
          <ImageIcon size={32} />
          <span className="text-[8px] uppercase font-black tracking-widest text-center">Image Load Failed</span>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          onError={() => setError(true)}
          className="w-full h-full object-cover transition-all duration-700" 
        />
      )}
    </div>
  );
};

const CaseStudyView = ({ project, onBack }) => {
  const [viewMode, setViewMode] = useState('preview'); 
  const [localCode, setLocalCode] = useState(project.code || "");

  useEffect(() => {
    setLocalCode(project.code || "");
    localStorage.setItem('last_project_id', project.id);
  }, [project]);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = localCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 md:pt-32 pb-20 px-4 md:px-6 font-inter animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto text-left">
        <button onClick={onBack} className="flex items-center gap-2 text-amber-500 font-black uppercase text-[10px] md:text-xs tracking-widest mb-10 hover:text-white transition-colors">
          <ArrowLeft size={16} /> <span>Back to Portfolio</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="space-y-4 text-left">
              <div className="flex flex-wrap gap-2 text-left">
                {project.tech.map(t => <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[10px] font-black text-amber-500 uppercase tracking-widest">{t}</span>)}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic font-poppins text-white leading-tight">{project.title}</h2>
              <p className="text-sm md:text-base text-gray-400 font-inter leading-relaxed">{project.description}</p>
            </div>
            <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl text-left">
              <h4 className="font-black text-[10px] md:text-xs uppercase text-amber-500 mb-2 md:mb-4 tracking-widest">Interactive Editor</h4>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">Edit the code below and see the real-time render on the right.</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl w-fit">
              <button onClick={() => setViewMode('preview')} className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'preview' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-500 hover:text-white'}`}>
                <Eye size={14} /> Preview
              </button>
              <button onClick={() => setViewMode('code')} className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'code' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-500 hover:text-white'}`}>
                <Code size={14} /> Source Code
              </button>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[600px] relative">
              {viewMode === 'preview' ? (
                <iframe 
                  title="Live Preview" 
                  srcDoc={localCode || "<html><body style='color:white; font-family:sans-serif; padding:40px; text-align:center;'>Preview unavailable.</body></html>"} 
                  className="w-full h-[400px] md:h-[600px] border-none bg-white" 
                />
              ) : (
                <div className="relative h-[400px] md:h-[600px] flex flex-col">
                  <div className="absolute top-2 md:top-4 right-4 md:right-6 z-10">
                    <button onClick={copyToClipboard} className="p-2 md:p-3 bg-white/10 text-white rounded-lg md:rounded-xl hover:bg-amber-500 hover:text-black transition-all" title="Copy"><Copy size={16} /></button>
                  </div>
                  <textarea
                    value={localCode}
                    onChange={(e) => setLocalCode(e.target.value)}
                    className="flex-1 p-4 md:p-8 bg-black/50 font-mono text-[10px] md:text-sm text-amber-500/90 outline-none resize-none selection:bg-amber-500 selection:text-black"
                    spellCheck="false"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="relative max-w-4xl mx-auto px-2 md:px-4 text-left" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonialsData.map((t) => (
            <div key={t.id} className="w-full flex-shrink-0">
              <div className="p-6 md:p-14 bg-[#111] border border-white/5 rounded-2xl md:rounded-[3rem] relative shadow-2xl mx-1 md:mx-2 text-left">
                <Quote className="text-amber-500/10 absolute top-4 md:top-10 right-4 md:right-10" size={32} md:size={64} />
                <div className="flex items-center gap-2 mb-4 md:mb-8">
                  <div className="flex text-amber-500">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={12} md:size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[8px] md:text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">{t.platform}</span>
                </div>
                <p className="text-gray-200 italic text-sm md:text-xl leading-relaxed mb-6 md:mb-10 font-medium">"{t.text}"</p>
                <div className="flex justify-between items-end border-t border-white/5 pt-4 md:pt-8">
                  <div>
                    <h4 className="font-black text-sm md:text-lg uppercase text-white font-poppins tracking-wide">{t.name}</h4>
                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-amber-500/70 font-bold uppercase tracking-widest mt-1">
                      <MapPin size={10} md:size={12} /> {t.location}
                    </div>
                  </div>
                  <span className="text-[7px] md:text-[10px] px-2 md:px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 font-black uppercase tracking-widest">
                    {t.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-white/5 hover:bg-amber-500 hover:text-black rounded-full border border-white/10 transition-all z-10 text-gray-400">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-white/5 hover:bg-amber-500 hover:text-black rounded-full border border-white/10 transition-all z-10 text-gray-400">
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
        {testimonialsData.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 md:h-1.5 transition-all rounded-full ${currentIndex === idx ? 'w-6 md:w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'w-1.5 md:w-2 bg-white/10 hover:bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formStatus, setFormStatus] = useState(null); 
  const [contactMessage, setContactMessage] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: "Hello! I'm Prodip's AI Twin. I've helped him complete over 451 orders with a 100% success rate on Upwork and Fiverr. How can I help you scale today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Persistence Logic
  useEffect(() => {
    const savedProjectId = localStorage.getItem('last_project_id');
    const savedPage = localStorage.getItem('last_page');
    if (savedPage === 'case-study' && savedProjectId) {
      const project = projectsData.find(p => p.id === savedProjectId);
      if (project) {
        setSelectedProject(project);
        setCurrentPage('case-study');
      }
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, targetHref) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = targetHref.replace('#', '');
    
    if (currentPage !== 'home') {
      setCurrentPage('home');
      localStorage.setItem('last_page', 'home');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setCurrentPage('case-study');
    localStorage.setItem('last_page', 'case-study');
    localStorage.setItem('last_project_id', project.id);
    window.scrollTo(0, 0);
  };

  const closeCaseStudy = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    localStorage.setItem('last_page', 'home');
    window.scrollTo(0, 0);
  };

  // AI Functionality
  const callGemini = async (prompt, systemInstruction, retries = 0) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        })
      });

      if (!response.ok) {
        if (response.status === 429 && retries < 5) {
          const delay = Math.pow(2, retries) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return callGemini(prompt, systemInstruction, retries + 1);
        }
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Network error. Please check your connection.";
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const systemPrompt = `You are the AI Twin of Prodip Roy. 
    Expert in Email Marketing, Automation (Mailchimp, HubSpot, Mailjet). 
    Fiverr Level 2 Seller, Upwork Top Rated. 451+ projects completed.
    Respond professionally and helpful in English.`;

    const response = await callGemini(userMsg, systemPrompt);
    setIsTyping(false);
    setChatMessages(prev => [...prev, { role: 'assistant', text: response }]);
  };

  const polishMessage = async () => {
    if (!contactMessage.trim() || isPolishing) return;
    setIsPolishing(true);
    const systemPrompt = "Rewrite this contact message to be more professional, catchy, and premium.";
    const result = await callGemini(contactMessage, systemPrompt);
    setContactMessage(result);
    setIsPolishing(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setContactMessage("");
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const filteredProjects = activeTab === 'all' ? projectsData : projectsData.filter(p => p.category === activeTab);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen selection:bg-amber-500/30 font-inter scroll-smooth">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&family=Inter:wght@400;500;600;700;900&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          body { font-family: 'Inter', sans-serif; background-color: #0a0a0a; }
          h1, h2, h3, h4, .nav-item, button { font-family: 'Poppins', sans-serif; font-weight: 800; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Global Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <button onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center text-left">
            <BrandLogo />
          </button>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-item text-[9px] lg:text-[10px] font-black text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-[0.2em]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300">
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)} 
                className="text-xl font-black text-white hover:text-amber-500 transition-colors uppercase tracking-widest font-poppins"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 md:right-6 z-[60] flex flex-col gap-3">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-black/10 group"
        >
          <MessageCircle size={24} md:size={28} className="group-hover:rotate-12 transition-transform" />
        </a>
        {!isChatOpen && (
          <button onClick={() => setIsChatOpen(true)} className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-black rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-black/10 group relative">
            <Bot size={24} md:size={28} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a]" />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-4 md:right-6 z-[70] w-[calc(100%-2rem)] sm:w-[350px] md:w-[400px] h-[450px] md:h-[500px] bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 text-left">
          <div className="p-4 bg-amber-500 flex justify-between items-center">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-amber-500"><Bot size={20} md:size={22} /></div>
              <div>
                <h4 className="font-black text-black text-xs md:text-sm uppercase leading-none font-poppins text-left">AI Twin</h4>
                <p className="text-[8px] md:text-[10px] text-black/70 font-black tracking-widest uppercase mt-1 italic text-left">Active</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-black/70 hover:text-black transition-colors"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] scrollbar-hide text-left">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl md:rounded-2xl text-[12px] md:text-sm leading-relaxed ${msg.role === 'user' ? 'bg-amber-500 text-black rounded-tr-none' : 'bg-white/5 border border-white/10 text-gray-100 rounded-tl-none shadow-xl'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="flex justify-start text-left"><div className="bg-white/5 border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl animate-pulse text-amber-500 text-[8px] md:text-[10px] font-black uppercase">Thinking...</div></div>}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 md:p-4 border-t border-white/5 bg-black/40">
            <div className="relative font-mono flex items-center">
              <input 
                type="text" 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} 
                placeholder="Ask me anything..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-4 py-2 md:py-3 text-[12px] md:text-sm focus:outline-none focus:border-amber-500/50 pr-10 md:pr-12 font-medium text-white" 
              />
              <button onClick={handleSendMessage} disabled={!chatInput.trim() || isTyping} className="absolute right-2 md:right-3 p-1.5 md:p-2 text-amber-500 disabled:opacity-30"><Send size={16} md:size={18} /></button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'home' ? (
        <div id="home-wrapper">
          {/* Hero Section */}
          <section id="hero" className="relative pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden min-h-[90vh] md:min-h-[95vh] flex items-center text-left px-4">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1600" alt="Workstation" className="w-full h-full object-cover opacity-15 grayscale scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
              <div className="text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-6 font-poppins italic text-left"><ShieldCheck size={12} className="text-blue-400" /> TOP RATED FREELANCER</div>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-[0.9] tracking-tighter uppercase font-poppins text-white">Scale Your <br /><span className="text-amber-500 not-italic">Impact.</span></h1>
                <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-xl font-medium font-inter">Elite Marketing Designer & Developer. Specialized in HubSpot automation, Mailchimp campaigns, and conversion logic.</p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="px-5 md:px-8 py-3 md:py-4 bg-amber-500 text-black font-black rounded-lg md:rounded-xl hover:bg-amber-400 transition-all flex items-center gap-2 group uppercase tracking-widest text-[10px] md:text-xs font-black font-poppins">Hire Prodip <ChevronRight size={16} /></a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-5 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-black rounded-lg md:rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 uppercase tracking-widest text-[10px] md:text-xs font-poppins">WhatsApp <MessageCircle size={16} className="text-[#25D366]" /></a>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                  <div className="absolute inset-0 rounded-3xl border-2 border-amber-500/30 rotate-6 -z-10" />
                  <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative bg-[#111]">
                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/a2ef8103ed718368adca4eca8fa1c844-1623160621089/e9456dca-26dd-4911-90f7-2c681e60e3d1.png" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 md:py-32 bg-[#0a0a0a] relative border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="order-2 md:order-1 text-left">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 italic font-poppins">Discover My Story</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-6 md:mb-8 font-poppins text-white">Human Creativity <br /><span className="text-amber-500 not-italic">With AI Intel.</span></h2>
                <p className="text-gray-400 font-inter text-sm md:text-lg leading-relaxed">I am **Prodip Roy**, an Elite Marketing Designer and Developer with over 6 years of expertise. I bridge the gap between human strategy and AI efficiency for global businesses.</p>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl md:rounded-[3rem] overflow-hidden border-2 border-white/10 aspect-square group shadow-2xl relative text-left">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Process" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </div>
          </section>

          {/* Platforms Section */}
          <section id="platforms" className="py-16 md:py-24 border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-left">
              <div className="text-center mb-12 md:mb-16">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 italic font-black font-poppins">Marketplace Presence</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins text-white">Freelance Success.</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="p-6 md:p-10 bg-[#111] border border-white/5 rounded-2xl md:rounded-[3rem] group hover:border-amber-500/30 transition-all shadow-2xl text-left">
                   <div className="flex justify-between items-start mb-6 md:mb-8 text-left">
                      <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-[#14a800]/10 transition-colors">
                        <img src={upworkLogo} alt="Upwork" className="h-6 md:h-8 w-auto max-w-[100px] md:max-w-[120px] object-contain" />
                      </div>
                      <div className="bg-[#14a800] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest font-poppins flex items-center gap-1.5"><Award size={10} md:size={12} /> Top Rated Candidate</div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-black uppercase italic mb-6 md:mb-8 font-poppins leading-none">Upwork Expert</h3>
                   <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 font-mono">
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">179+</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Total Hours</p>
                      </div>
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">100%</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Job Success</p>
                      </div>
                   </div>
                   <a href={upworkLink} target="_blank" className="block w-full py-4 md:py-5 bg-[#14a800] text-white rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase text-center font-poppins hover:brightness-110 shadow-lg transition-all">View Profile</a>
                </div>
                <div className="p-6 md:p-10 bg-[#111] border border-white/5 rounded-2xl md:rounded-[3rem] group hover:border-amber-500/30 transition-all shadow-2xl text-left">
                   <div className="flex justify-between items-start mb-6 md:mb-8 text-left">
                      <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-[#1dbf73]/10 transition-colors">
                        <img src={fiverrLogo} alt="Fiverr" className="h-6 md:h-8 w-auto max-w-[100px] md:max-w-[120px] object-contain" />
                      </div>
                      <div className="bg-white/5 text-amber-500 border border-amber-500/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest font-poppins flex items-center gap-1.5"><Trophy size={10} md:size={12} /> Level 2 Seller</div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-black uppercase italic mb-6 md:mb-8 font-poppins leading-none">Fiverr Specialist</h3>
                   <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 font-mono">
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">451+</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Orders Done</p>
                      </div>
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">256+</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Reviews</p>
                      </div>
                   </div>
                   <a href={fiverrLink} target="_blank" className="block w-full py-4 md:py-5 bg-[#1dbf73] text-white rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase text-center font-poppins hover:brightness-110 shadow-lg transition-all">View Profile</a>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-24 border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins mb-10 md:mb-16 text-center text-white">Technical Mastery.</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {skillsData.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <div key={idx} className="p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl md:rounded-[2rem] hover:border-amber-500/50 transition-all text-left">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 text-amber-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                          <Icon size={20} md:size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-black italic mb-4 md:mb-6 font-poppins text-left text-white">{skill.name}</h3>
                        <ul className="space-y-2">
                          {skill.items.map(item => <li key={item} className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest text-left">• {item}</li>)}
                        </ul>
                      </div>
                    );
                  })}
               </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="py-16 md:py-24 border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 md:mb-16">
                <div className="text-center md:text-left">
                  <p className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2 md:mb-3 italic font-black font-poppins">Portfolio Showcase</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins text-white">Recent Projects.</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl font-poppins font-black">
                  {['all', 'web', 'email', 'automation'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 md:px-5 py-2 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black transition-all uppercase tracking-widest ${activeTab === tab ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-500 hover:text-white'}`}>{tab}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-inter">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group relative bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all flex flex-col shadow-2xl">
                    <div className="h-48 md:h-64 overflow-hidden relative">
                      <SafeImage src={project.image} alt={project.title} className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent text-left" />
                    </div>
                    <div className="p-5 md:p-6 flex-1 flex flex-col text-left">
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {project.tech.map(t => <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-[7px] md:text-[8px] font-black rounded text-gray-400 uppercase tracking-widest">{t}</span>)}
                      </div>
                      <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 italic group-hover:text-amber-500 transition-colors uppercase font-poppins text-white">{project.title}</h3>
                      <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 flex-1 leading-relaxed font-inter">{project.description}</p>
                      <button onClick={() => project.category === 'web' ? window.open(project.url, '_blank') : openCaseStudy(project)} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-white hover:text-amber-500 transition-all uppercase tracking-widest group/btn italic font-poppins font-black">
                        {project.category === 'web' ? 'View Website' : 'View Case Study'} <MoveRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-16 md:py-24 border-t border-white/5 text-left overflow-hidden bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-left">
              <div className="text-center mb-12 md:mb-20">
                <p className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-3 md:mb-4 italic font-black font-poppins text-center">World-class Feedback</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins text-white text-center">Client Reviews.</h2>
              </div>
              <TestimonialSlider />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-24 border-t border-white/5 text-left">
             <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase underline decoration-amber-500/10 font-poppins mb-10 md:mb-12 text-center text-white">Scale Your Brand.</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6 text-left max-w-2xl mx-auto text-left">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                      <input type="text" name="name" required placeholder="YOUR NAME" className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-amber-500 focus:outline-none transition-all placeholder:text-gray-700 font-bold text-[10px] md:text-xs text-white text-left" />
                      <input type="email" name="email" required placeholder="EMAIL ADDRESS" className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-amber-500 focus:outline-none transition-all placeholder:text-gray-700 font-bold text-[10px] md:text-xs text-white text-left" />
                   </div>
                   <div className="relative text-left">
                      <textarea name="message" required value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} placeholder="PROJECT REQUIREMENTS..." rows="5" className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-amber-500 focus:outline-none transition-all placeholder:text-gray-700 font-bold text-[10px] md:text-xs font-inter text-white text-left" />
                      <button type="button" onClick={polishMessage} disabled={!contactMessage.trim() || isPolishing} className="absolute bottom-3 md:bottom-4 right-3 md:right-4 px-4 md:px-5 py-2 md:py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50 italic font-poppins">AI Polish ✨</button>
                   </div>
                   {formStatus === 'success' && <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-xs font-bold uppercase text-center mb-4">Message sent successfully!</div>}
                   {formStatus === 'error' && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-bold uppercase text-center mb-4">Something went wrong. Please try again.</div>}
                   <button type="submit" disabled={formStatus === 'loading'} className="w-full py-4 md:py-6 bg-amber-500 text-black font-black rounded-xl md:rounded-2xl hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group uppercase tracking-[0.2em] text-[10px] md:text-xs font-poppins text-center">
                     {formStatus === 'loading' ? 'Submitting...' : 'Submit'} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </form>
             </div>
          </section>
        </div>
      ) : (
        <CaseStudyView project={selectedProject} onBack={closeCaseStudy} />
      )}

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-white/5 bg-[#050505] font-poppins text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <BrandLogo />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href={linkedinLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><Linkedin size={18} md:size={20} /></a>
            <a href={facebookLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><Facebook size={18} md:size={20} /></a>
            <a href={instagramLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><Instagram size={18} md:size={20} /></a>
            <a href={whatsappLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><MessageCircle size={18} md:size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;