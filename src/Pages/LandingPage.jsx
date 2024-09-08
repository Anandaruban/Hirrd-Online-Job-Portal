import { Link } from "react-router-dom"
import logo from "../utils/logo.png"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import companies from "../data/companies.json"
import Autoplay from "embla-carousel-autoplay"
import banner from "../utils/banner.jpeg"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const LandingPage = () => {
  return (
    <div className="grid gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl font-extrabold gradient-title sm:text-6xl lg:text-8xl tracking-tight py-4">Find Your Dream Job{" "} 
          <span className="flex items-center gap-2 sm:gap-6">
            and get{" "}
            <img className="h-14 sm:h-24 lg:h-32" src={logo} alt="Hirrd-logo" />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button size="xl" variant="destructive">Post a Job</Button>
        </Link>
      </div>

      <Carousel plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]} className="w-full py-10">
        <CarouselContent className="flex items-center gap-4 sm:gap-16">
          {companies.map(({name, id ,path}) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img className="h-9 sm:h-14 object-contain" src={path} alt={name} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>

      <img src={banner} alt="banner" className="w-full" />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications, and more.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>

      {/* accordio */}
    </div>
  )
}

export default LandingPage