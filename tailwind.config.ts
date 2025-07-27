import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'playfair': ['Playfair Display', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius-md)',
				sm: 'var(--radius-sm)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)',
				'3xl': 'var(--radius-3xl)',
				'4xl': 'var(--radius-4xl)',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '3.5rem' }],
				'6xl': ['3.75rem', { lineHeight: '4rem' }],
				'7xl': ['4.5rem', { lineHeight: '5rem' }],
				'8xl': ['6rem', { lineHeight: '6.5rem' }],
				'9xl': ['8rem', { lineHeight: '8.5rem' }],
			},
			boxShadow: {
				'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
				'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
				'none': '0 0 #0000',
				// DAENA Premium Shadows
				'lavender-xs': '0 2px 8px hsl(var(--primary) / 0.08)',
				'lavender-sm': '0 4px 12px hsl(var(--primary) / 0.12)',
				'lavender-md': '0 8px 25px hsl(var(--primary) / 0.15)',
				'lavender-lg': '0 15px 35px hsl(var(--primary) / 0.2)',
				'lavender-xl': '0 25px 50px hsl(var(--primary) / 0.25)',
				'glow': '0 0 60px hsl(var(--primary-glow) / 0.6)',
				'aurora': '0 8px 32px hsl(var(--primary) / 0.3), 0 0 0 1px hsl(var(--primary) / 0.05)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-aurora': 'linear-gradient(135deg, hsl(270 75% 65%), hsl(280 70% 70%), hsl(290 65% 75%))',
				'gradient-sunset': 'linear-gradient(135deg, hsl(315 75% 70%), hsl(270 75% 65%), hsl(225 70% 70%))',
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))',
				'gradient-hero': 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--primary-light)) 100%)',
				'mesh-gradient': `
					radial-gradient(at 40% 20%, hsl(var(--primary)) 0px, transparent 50%),
					radial-gradient(at 80% 0%, hsl(var(--primary-light)) 0px, transparent 50%),
					radial-gradient(at 0% 50%, hsl(var(--primary-glow)) 0px, transparent 50%),
					radial-gradient(at 80% 50%, hsl(var(--primary)) 0px, transparent 50%),
					radial-gradient(at 0% 100%, hsl(var(--primary-light)) 0px, transparent 50%),
					radial-gradient(at 80% 100%, hsl(var(--primary-glow)) 0px, transparent 50%),
					radial-gradient(at 0% 0%, hsl(var(--primary)) 0px, transparent 50%)
				`,
			},
			keyframes: {
				// Base animations
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// DAENA Premium Animations
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
					},
					'25%': { 
						transform: 'translateY(-20px) rotate(1deg)',
						animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(0deg)',
						animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
					},
					'75%': { 
						transform: 'translateY(-15px) rotate(-1deg)',
						animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(var(--primary) / 0.3)',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(var(--primary-glow) / 0.6), 0 0 90px hsl(var(--primary) / 0.4)',
						filter: 'brightness(1.1)'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-10px)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'aurora': {
					'0%': {
						backgroundPosition: '0% 50%',
						backgroundSize: '200% 200%'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						backgroundSize: '200% 200%'
					},
					'100%': {
						backgroundPosition: '0% 50%',
						backgroundSize: '200% 200%'
					}
				},
				'magnetic': {
					'0%': {
						transform: 'scale(1) rotateZ(0deg)'
					},
					'50%': {
						transform: 'scale(1.05) rotateZ(1deg)'
					},
					'100%': {
						transform: 'scale(1) rotateZ(0deg)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				}
			},
			animation: {
				// Base animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// DAENA Premium Animations
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 4s ease-in-out infinite',
				'fade-up': 'fade-up 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'aurora': 'aurora 8s ease-in-out infinite',
				'magnetic': 'magnetic 0.3s ease-in-out',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				
				// Pulse variations
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			backdropBlur: {
				'xs': '2px',
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			},
			transitionDuration: {
				'250': '250ms',
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'900': '900ms',
				'1200': '1200ms',
				'1500': '1500ms',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;