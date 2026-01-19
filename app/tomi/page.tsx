'use client'

import { Mail, Instagram, Github, MessageCircle, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function TomiProfile() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            
            {/* Foto */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
              <img
                src="/images/tomi-profile.jpg"
                alt="Tomás Carreras"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nombre */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">Tomás Carreras</h1>
              <p className="text-sm text-gray-500 mt-1">Prof. de Inglés</p>
            </div>

            {/* Email texto */}
            <a
              href="mailto:tomi@speaktoday.com.ar"
              className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
            >
              tomi@speaktoday.com.ar
            </a>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>

            {/* Botones */}
            <div className="space-y-3 w-full">

              {/* Email */}
              <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                <a href="mailto:tomi@speaktoday.com.ar" className="flex items-center justify-center gap-2">
                  <Mail size={20} />
                  Enviar email
                </a>
              </Button>

              {/* WhatsApp 1:1 */}
              <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white" asChild>
                <a
                  href="https://wa.me/5493462338306?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20clases%201:1%20con%20el%20Prof.%20Tom%C3%A1s%20Carreras."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Clases 1:1
                </a>
              </Button>

              {/* Instagram */}
              <Button variant="outline" className="w-full h-12 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50" asChild>
                <a
                  href="https://instagram.com/tomicarreras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </Button>

              {/* Discord */}
              <Button
  variant="outline"
  className="w-full h-12 border-2 border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10"
  asChild
>
  <a
    href="https://discord.gg/JYPQMuU3gE"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2"
  >
    <img
      src="/public/discord.svg"
      alt="Discord"
      className="w-5 h-5"
    />
    Unite al Discord
  </a>
</Button>


            </div>

            <Link href="/" className="text-indigo-600 hover:text-indigo-700 text-sm">
              ← Volver a SpeakToday
            </Link>

          </div>
        </Card>
      </div>
    </main>
  )
}
