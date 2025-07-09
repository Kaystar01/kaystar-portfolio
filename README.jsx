import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Hi, I'm Kay Star</h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          Aspiring Junior Software Developer | PHP, Python, JS, MySQL, HTML, CSS
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Bean-Brew</h2>
              <p className="mb-2">
                A digital solution prototype for a coffee and food chain, Bean and Brew. Built with PHP, HTML, CSS, JS and MySQL. Key features include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>Book tables at Harrogate, Leeds, and Knaresborough Castle</li>
                <li>Pre-order drinks and baked goods for collection</li>
                <li>Online booking system for baking lessons</li>
                <li>Customizable baked goods hampers</li>
                <li>User account creation for easy reordering</li>
                <li>Social media sharing - 'Rate my cake'</li>
              </ul>
              <Button variant="outline">View Screenshot</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">GreenTrack</h2>
              <p className="mb-2">
                A sustainability-focused web app for tracking and reducing carbon footprints. Developed with PHP, HTML, CSS, JS and MySQL. Key features:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>Carbon footprint calculator</li>
                <li>Consultation form for solar panel or green installation services</li>
                <li>Daily/weekly energy usage tracking dashboard</li>
                <li>Tips and suggestions to reduce energy consumption</li>
              </ul>
              <Button variant="outline">View Screenshot</Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>PHP & MySQL</li>
            <li>Python</li>
            <li>JavaScript & CSS</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <p className="text-gray-700 mb-2">Email: arikefga@gmail.com</p>
          <Button variant="default">LinkedIn</Button>
        </section>
      </motion.div>
    </main>
  );
}
