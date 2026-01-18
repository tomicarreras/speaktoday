'use client'

import { Mail, Instagram, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function TomiProfile() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            {/* Foto de perfil en círculo */}
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

            {/* Email */}
            <div className="text-center">
              <a
                href="mailto:tomi@speaktoday.com.ar"
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                tomi@speaktoday.com.ar
              </a>
            </div>

            {/* Separador */}
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>

            {/* Botones de contacto y redes */}
            <div className="space-y-3 w-full">
              <Button
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                asChild
              >
                <a href="mailto:tomi@speaktoday.com.ar" className="flex items-center justify-center gap-2">
                  <Mail size={20} />
                  Enviar email
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                asChild
              >
                <a
                  href="https://instagram.com/tu_usuario_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 border-2 border-gray-800 text-gray-800 hover:bg-gray-50"
                asChild
              >
                <a
                  href="https://github.com/tu_usuario_github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Botón para volver a la web principal */}
            <Link href="/" className="text-indigo-600 hover:text-indigo-700 text-sm mt-4">
              ← Volver a Speak Today
            </Link>
          </div>
        </Card>
      </div>
    </main>
  )
}
