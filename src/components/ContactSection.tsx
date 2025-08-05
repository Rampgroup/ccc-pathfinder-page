import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact our expert counselors for personalized guidance 
            and support in choosing the right college and career path.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card h-full">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      CCC Campus, Block A, Sector 62<br />
                      Noida, Uttar Pradesh 201309
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    <p className="text-muted-foreground text-sm">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">info@campuscareerclub.com</p>
                    <p className="text-muted-foreground text-sm">support@campuscareerclub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold text-primary mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="grade">Current Status *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th-passed">12th Passed</SelectItem>
                          <SelectItem value="12th-appearing">12th Appearing</SelectItem>
                          <SelectItem value="gap-year">Gap Year</SelectItem>
                          <SelectItem value="college-student">College Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="interest">Area of Interest *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering & Technology</SelectItem>
                          <SelectItem value="medical">Medical & Healthcare</SelectItem>
                          <SelectItem value="business">Business & Management</SelectItem>
                          <SelectItem value="arts">Arts & Sciences</SelectItem>
                          <SelectItem value="design">Design & Media</SelectItem>
                          <SelectItem value="law">Law</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your career goals, questions, or how we can help you..."
                      className="mt-1"
                      rows={5}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from Campus Career Club and understand that I can unsubscribe at any time.
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" variant="cta" size="lg" className="flex-1">
                      Send Message
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who found their perfect college and career path with Campus Career Club. 
            Your journey to success starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white/10 border-grey/30 text-white hover:bg-white/20">
              Start Free Consultation
            </Button>
            <Button variant="hero" size="lg" className="bg-white/10 border-grey/30 text-white hover:bg-white/20">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;