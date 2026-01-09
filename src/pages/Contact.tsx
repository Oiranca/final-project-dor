import { CONTACT_INFO } from "../data/info";

const ContactPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contacto</h1>

      <div className="rounded-2xl border border-slate-300 bg-blue-100 p-6 shadow">
        <div className="mb-3">
          <h2 className="text-xl font-semibold leading-none">{CONTACT_INFO.title}</h2>
        </div>
        <div className="space-y-2 text-slate-800">
          <p>Email: {CONTACT_INFO.email}</p>
          <p>Teléfono: {CONTACT_INFO.phone}</p>
          <p>Horario: {CONTACT_INFO.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
