import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Play,
  User,
  PhoneCall,
  Stethoscope,
  Ambulance,
} from "lucide-react";
import docimages from "../src/components/images/doc.jpg";
import { Link } from "react-router-dom";

export default function HospitalLanding() {
  return (
    <div className="min-h-screen text-gray-800">
      
      <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
        <div>
          <h2 className="text-indigo-600 font-semibold text-[30px]">We care</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            about your health
          </h1>
          <p className="mt-4 text-gray-600">
            Good health is the state of mental, physical and social well-being
            and it does not just mean absence of diseases.
          </p>
          <div className="flex gap-4 mt-6 ">
            <Button className="cursor-pointer">Book an appointment</Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4" /> Watch videos
            </Button>
          </div>
          <p className="mt-6 text-sm">
            Become member of our hospital community?{" "}
            <a
              href="#"
              className="text-indigo-600 font-semibold cursor-pointer"
            >
              Sign up
            </a>
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Input placeholder="Name of Doctor" className="w-40" />
            <Input placeholder="Speciality" className="w-40" />
            
            <Button className="cursor-pointer">
              <Search className="w-4 h-4 mr-1" /> Search
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src={docimages}
            alt="Doctor"
            className="rounded-full border-4 border-indigo-200 w-80 h-80 object-cover object-[10%_center] "
          />

          <div className="absolute top-4 left-0 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
            <User className="text-indigo-600 w-5 h-5" />
            <span className="text-sm font-medium">Well Qualified Doctors</span>
          </div>
          <div className="absolute bottom-6 right-0 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
            <PhoneCall className="text-indigo-600 w-5 h-5" />
            <span className="text-sm font-medium">Continuous Support</span>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold">Our Medical Services</h2>
        <p className="mt-2 text-gray-600">
          We are dedicated to serve you best medical services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 px-8">
          <Card className="rounded-2xl shadow-sm transition text-indigo-600 hover:bg-indigo-600 hover:text-white cursor-pointer">
  <CardContent className="flex flex-col items-center py-8">
    <Stethoscope className="w-10 h-10 text-current" />
    <h3 className="mt-4 font-semibold ">Well equipped lab</h3>
  </CardContent>
</Card>

<Card className="rounded-2xl shadow-sm transition text-indigo-600 hover:bg-indigo-600 hover:text-white cursor-pointer">
  <CardContent className="flex flex-col items-center py-8 ">
    <Ambulance className="w-10 h-10" />
    <h3 className="mt-4 font-semibold">Emergency Ambulance</h3>
  </CardContent>
</Card>

<Card className="rounded-2xl shadow-sm transition text-indigo-600 hover:bg-indigo-600 hover:text-white  cursor-pointer">
  <CardContent className="flex flex-col items-center py-8">
    <User className="w-10 h-10" />
    <h3 className="mt-4 font-semibold">Online Appointment</h3>
  </CardContent>
</Card>

<Card className="rounded-2xl shadow-sm transition text-indigo-600 hover:bg-indigo-600 hover:text-white  cursor-pointer">
  <CardContent className="flex flex-col items-center py-8">
    <PhoneCall className="w-10 h-10" />
    <h3 className="mt-4 font-semibold">Call Center</h3>
  </CardContent>
</Card>
        </div>
      </section>
    </div>
  );
}
