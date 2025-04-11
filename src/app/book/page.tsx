'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Coffee,
  Github,
  Linkedin,
  Video
} from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

type MeetingType = {
  id: string
  title: string
  duration: string
  icon: React.ReactNode
  description: string
}

type TimeSlot = {
  id: string
  date: string
  dayOfWeek: string
  slots: string[]
}

const meetingTypes: MeetingType[] = [
  {
    id: 'quick-chat',
    title: 'Quick Chat',
    duration: '15 min',
    icon: <Coffee className="h-5 w-5" />,
    description:
      'A brief introduction or quick question about my work or experience.'
  },
  {
    id: 'portfolio-review',
    title: 'Portfolio Review',
    duration: '30 min',
    icon: <Video className="h-5 w-5" />,
    description:
      'In-depth discussion about a specific project or technical challenge.'
  },
  {
    id: 'interview-prep',
    title: 'Interview Prep',
    duration: '45 min',
    icon: <Clock className="h-5 w-5" />,
    description:
      'Mock interview or career advice session for fellow developers.'
  }
]

const availableTimeSlots: TimeSlot[] = [
  {
    id: '1',
    date: 'Apr 10',
    dayOfWeek: 'Wed',
    slots: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']
  },
  {
    id: '2',
    date: 'Apr 11',
    dayOfWeek: 'Thu',
    slots: ['9:00 AM', '1:00 PM', '2:00 PM', '4:00 PM']
  },
  {
    id: '3',
    date: 'Apr 12',
    dayOfWeek: 'Fri',
    slots: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM']
  }
]

export default function BookingPage() {
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState(1)

  const handleMeetingSelect = (id: string) => {
    setSelectedMeeting(id)
    setStep(2)
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(3)
  }

  const handleBack = () => {
    if (step === 3) {
      setSelectedTime(null)
      setStep(2)
    } else if (step === 2) {
      setSelectedDate(null)
      setSelectedMeeting(null)
      setStep(1)
    }
  }

  const handleConfirm = () => {
    alert(
      `Booking confirmed: ${selectedMeeting} on ${selectedDate} at ${selectedTime}`
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="flex flex-col sm:flex-row sm:justify-between mb-16">
        <div className="flex flex-col">
          <div className="flex items-start gap-5 mb-4">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Profile Picture"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-teal transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <Link
                href="/"
                className="text-sm text-foreground hover:text-accent-teal transition-colors flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5 w-fit"
              >
                <ArrowLeft className="mr-1" size={16} />
                <span>Back to home</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </header>

      <main>
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Book a Call</h2>
          <p className="text-base text-muted-foreground">
            Select a meeting type and time slot that works for you. I look
            forward to our conversation!
          </p>
        </div>

        {/* Booking steps */}
        <div className="flex mb-10">
          <div
            className={`flex items-center ${step >= 1 ? 'text-accent-teal' : 'text-muted-foreground'}`}
          >
            <div className="w-8 h-8 rounded-full border flex items-center justify-center mr-2 border-current">
              1
            </div>
            <span className="text-sm">Meeting Type</span>
          </div>
          <div className="w-8 h-px bg-muted mx-2 self-center">
            <div
              className={`h-full ${step >= 2 ? 'bg-accent-teal' : 'bg-muted'}`}
            ></div>
          </div>
          <div
            className={`flex items-center ${step >= 2 ? 'text-accent-teal' : 'text-muted-foreground'}`}
          >
            <div className="w-8 h-8 rounded-full border flex items-center justify-center mr-2 border-current">
              2
            </div>
            <span className="text-sm">Date & Time</span>
          </div>
          <div className="w-8 h-px bg-muted mx-2 self-center">
            <div
              className={`h-full ${step >= 3 ? 'bg-accent-teal' : 'bg-muted'}`}
            ></div>
          </div>
          <div
            className={`flex items-center ${step >= 3 ? 'text-accent-teal' : 'text-muted-foreground'}`}
          >
            <div className="w-8 h-8 rounded-full border flex items-center justify-center mr-2 border-current">
              3
            </div>
            <span className="text-sm">Confirm</span>
          </div>
        </div>

        {/* Step 1: Meeting Type Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Select a meeting type</h3>
            {meetingTypes.map(meeting => (
              <div
                key={meeting.id}
                className={`border p-6 rounded-sm cursor-pointer hover:border-accent-teal transition-colors ${
                  selectedMeeting === meeting.id
                    ? 'border-accent-teal bg-accent-teal bg-opacity-5'
                    : 'border-border'
                }`}
                onClick={() => handleMeetingSelect(meeting.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="mr-3 text-muted-foreground">
                      {meeting.icon}
                    </div>
                    <h4 className="font-bold text-base">{meeting.title}</h4>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {meeting.duration}
                  </span>
                </div>
                <p className="text-base text-muted-foreground">
                  {meeting.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Date and Time Selection */}
        {step === 2 && (
          <div>
            <button
              onClick={handleBack}
              className="text-sm text-foreground hover:text-accent-teal transition-colors flex items-center mb-6 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
            >
              <ArrowLeft className="mr-1" size={16} />
              <span>Back to meeting types</span>
            </button>

            <h3 className="text-xl font-bold mb-6">Select a date and time</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {availableTimeSlots.map(dateSlot => (
                <div
                  key={dateSlot.id}
                  className={`border p-6 rounded-sm cursor-pointer hover:border-accent-teal transition-colors ${
                    selectedDate === dateSlot.date
                      ? 'border-accent-teal bg-accent-teal bg-opacity-5'
                      : 'border-border'
                  }`}
                  onClick={() => handleDateSelect(dateSlot.date)}
                >
                  <div className="text-center mb-4">
                    <div className="font-bold text-base">
                      {dateSlot.dayOfWeek}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {dateSlot.date}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="h-5 w-5 text-muted-foreground mb-2" />
                    <span className="text-sm">
                      {dateSlot.slots.length} available
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {selectedDate && (
              <div>
                <h4 className="font-bold text-base mb-4">
                  Available times on {selectedDate}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {availableTimeSlots
                    .find(slot => slot.date === selectedDate)
                    ?.slots.map(time => (
                      <button
                        key={time}
                        className={`p-3 text-center border rounded-sm text-sm hover:border-accent-teal transition-colors ${
                          selectedTime === time
                            ? 'border-accent-teal text-accent-teal'
                            : 'border-gray-200 dark:border-gray-700 text-foreground'
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div>
            <button
              onClick={handleBack}
              className="text-sm text-foreground hover:text-accent-teal transition-colors flex items-center mb-6 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
            >
              <ArrowLeft className="mr-1" size={16} />
              <span>Back to date and time</span>
            </button>

            <h3 className="text-xl font-bold mb-6">Confirm your booking</h3>

            <div className="border border-gray-200 dark:border-gray-700 rounded-sm p-6 mb-8">
              <div className="flex items-start mb-6">
                <Calendar className="h-5 w-5 text-muted-foreground mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base">
                    {meetingTypes.find(m => m.id === selectedMeeting)?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {meetingTypes.find(m => m.id === selectedMeeting)?.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Clock className="h-5 w-5 text-muted-foreground mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base">{selectedDate}</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Video className="h-5 w-5 text-muted-foreground mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-base">Video Call</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a link to join the call after confirmation
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-sm p-6 mb-8">
              <h4 className="font-bold text-base mb-4">Your information</h4>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-sm bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-sm bg-background"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    What would you like to discuss?
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-sm bg-background"
                    rows={3}
                    placeholder="Brief description of what you'd like to talk about"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full border border-gray-200 dark:border-gray-700 text-foreground py-3 font-medium hover:border-accent-teal hover:text-accent-teal transition-colors rounded-sm"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
