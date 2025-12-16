// src/pages/Contact.tsx
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";

const ContactPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>

      <Card>
        <CardHeader>
          <CardTitle>How to reach us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-slate-300">
          <p>Email: reservations@hotel.example</p>
          <p>Phone: +34 900 000 000</p>
          <p>Hours: 09:00 — 20:00 (CET)</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
