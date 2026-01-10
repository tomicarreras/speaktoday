"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "",
    level: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent("Inscripción SpeakToday")
    const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Taller: ${formData.workshop}
Nivel: ${formData.level}
Mensaje: ${formData.message}
    `)

    // Abre el cliente de correo del usuario
    // Cambia tu@email.com por tu dirección real
    window.location.href = `mailto:tu@email.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="enroll" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Comienza Tu <span className="text-primary">Aprendizaje</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo para coordinar tu primera clase
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@ejemplo.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+54 9 11 1234-5678"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="workshop">Taller de Interés *</Label>
                <select
                  id="workshop"
                  required
                  value={formData.workshop}
                  onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                  className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Selecciona un taller</option>
                  <option value="developers">English for Developers</option>
                  <option value="travellers">English for Travellers</option>
                  <option value="interviews">English for Job Interviews</option>
                  <option value="general">General English</option>
                </select>
              </div>

              <div>
                <Label htmlFor="level">Nivel de Inglés *</Label>
                <select
                  id="level"
                  required
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Selecciona tu nivel</option>
                  <option value="principiante">Principiante (A1-A2)</option>
                  <option value="intermedio">Intermedio (B1-B2)</option>
                  <option value="avanzado">Avanzado (C1-C2)</option>
                  <option value="no-se">No estoy seguro/a</option>
                </select>
                <p className="text-xs text-muted-foreground mt-2">
                  ¿No estás seguro de tu nivel?{" "}
                  <a
                    href="https://www.efset.org/es/quick-check/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Realiza un test de nivelación aquí
                  </a>
                </p>
              </div>

              <div>
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos sobre tus objetivos o necesidades específicas..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar solicitud
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Al enviar este formulario, aceptas que nos comuniquemos contigo para coordinar tu clase.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
