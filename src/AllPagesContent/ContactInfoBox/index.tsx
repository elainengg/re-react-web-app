
type ContactInfoBox = {
  photo: string
  email: string;
  phone: string;
  address: string;
}

export default function ContactInfoBox({photo, email, phone, address}: ContactInfoBox) {
    return (
      <div id="contact-info-box">
        <img src={photo} alt="Contact" style={{ width: "150px", borderRadius: "8px" }} />
        <h1> Contact Info </h1>
        <h2> <a href={`mailto:${email}`}>{email}</a> </h2>
        <h2> <a href={`tel:${phone}`}>{phone}</a> </h2>
        {/* make these clickable link - Call Now? Send to Outlook*/}
        <h2>{address}</h2>

      </div>
    );
  }
  