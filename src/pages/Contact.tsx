import { CONTACT_INFO } from "../data/info";

const ContactPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contacto</h1>

      <div className="rounded-2xl border border-slate-200/20 bg-white/10 p-6 shadow backdrop-blur">
        <div className="mb-3">
          <h2 className="text-xl font-semibold leading-none">{CONTACT_INFO.title}</h2>
        </div>
        <div className="space-y-2 text-slate-300">
          <p>Email: {CONTACT_INFO.email}</p>
          <p>Teléfono: {CONTACT_INFO.phone}</p>
          <p>Horario: {CONTACT_INFO.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
