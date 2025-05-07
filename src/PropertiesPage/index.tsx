import ContactInfoBox from "../AllPagesContent/ContactInfoBox"
import NavigationBox from "../AllPagesContent/NavigationBox"


export default function PropertiesPage() {
    return (
      <div id="properties-page">
        
      <NavigationBox
      header_photo="data:image/webp;base64,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"    
      list_of_links={[
        { label: 'Properties', to: '/PropertiesPage/*' },
        { label: 'Blogs', to: '/BlogsPage/*' },
        { label: 'About', to: '/AboutMePage/*' }
      ]} />

      <ContactInfoBox 
        photo="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7x24xlRU5LXi9PrEIAefPG1l64r5YYW7b98zSEJ5JBwoLDZ7ymah0uH1zkfHEb5cj9KfzIr6qQaxm9E055gg-ZgQL2x-xgQCBuWO6wr4"
        email="someone@example.com" 
        phone="+1999999999" 
        address="123 Main St, Springfield"
      />  

      <h2>Showing off my properties</h2>
      </div>
    );
  }
  