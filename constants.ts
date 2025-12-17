import { Industry } from './types';

export const INDUSTRIES: Industry[] = [
  {
    id: '1',
    name: 'Aerospace',
    slug: 'aerospace',
    category: 'Precision',
    shortDescription: 'Certified flight-critical components for aviation and defense.',
    fullDescription: 'Duramet Technologies provides mission-critical engineering components for the aerospace sector. We ensure 100% authenticity and compliance with international aviation standards, serving major OEMs and MRO providers globally.',
    image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&w=1200&q=80',
    partners: [
      {
        id: 'p1',
        name: 'AeroSystems Global',
        logo: '',
        description: 'Manufacturer of high-performance hydraulic and flight control assets.',
        products: [
          { id: 'AS-101', name: 'Hydraulic Actuator H-Series', description: 'Certified for primary flight control systems. High-tensile titanium-grade casing for extreme pressure reliability.', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80', specs: ['MIL-SPEC 8823', 'Titanium Grade 5'] },
          { id: 'AS-202', name: 'Precision Fuel Valves', description: 'Low-weight high-reliability fuel regulation valves for next-gen jet engines.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', specs: ['Max Flow: 500L/h', 'Alloy 718'] },
          { id: 'AS-303', name: 'Avionics Cooling Unit', description: 'Active thermal management system for high-density flight decks and server racks.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
          { id: 'AS-404', name: 'Landing Gear Bushings', description: 'High-wear resistance bronze-beryllium alloys designed for heavy-lift landing systems.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
          { id: 'AS-505', name: 'Turbo-Fan Sensors', description: 'Real-time vibration and heat monitoring for high-speed turbine cores and exhaust systems.', image: 'https://images.unsplash.com/photo-1581092162384-8987c1794714?auto=format&fit=crop&w=800&q=80' },
          { id: 'AS-606', name: 'Titanium Wing Spars', description: 'Ultra-lightweight structural wing components forged for maximum stress tolerance.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Power',
    slug: 'power',
    category: 'Energy',
    shortDescription: 'Robust solutions for energy generation and grid distribution.',
    fullDescription: 'Supporting traditional and renewable energy infrastructures. Our portfolio includes heavy electricals, grid components, and specialized tooling for power plant maintenance.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    partners: [
      {
        id: 'p3',
        name: 'GridWorks Electric',
        logo: '',
        description: 'Industrial transformers and circuit protection specialists.',
        products: [
          { id: 'GW-V1', name: 'High-Voltage Isolator', description: 'Advanced safety switching for high-tension transmission lines and regional sub-stations.', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80' },
          { id: 'GW-V2', name: 'CT-200 Transformer', description: 'Precision metering for smart grid monitoring and industrial load balancing.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
          { id: 'GW-V3', name: 'Gas Switchgear', description: 'Compact SF6 insulated solutions for modern urban sub-stations and underground grids.', image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e787?auto=format&fit=crop&w=800&q=80' },
          { id: 'GW-V4', name: 'Power Busbars', description: 'High-conductivity electrolytic copper distribution bars for industrial manufacturing plants.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80' },
          { id: 'GW-V5', name: 'Surge Protectors', description: 'Industrial grade lightning and surge protection for critical grid infrastructure assets.', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Automotive',
    slug: 'automotive',
    category: 'Manufacturing',
    shortDescription: 'Tier-1 components for EV and performance vehicle manufacturing.',
    fullDescription: 'From chassis components to electric drivetrain modules, we partner with world-class manufacturers to supply the automotive production lines of the future.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    partners: [
      {
        id: 'p4',
        name: 'DriveTrain Solutions',
        logo: '',
        description: 'Propulsion and transmission engineering specialists.',
        products: [
          { id: 'DT-A1', name: 'Differential Gear', description: 'Heavy-duty torque distribution for performance and heavy-duty commercial drivetrains.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
          { id: 'DT-A2', name: 'EV Inverter Module', description: 'High-efficiency power conversion unit for dual-motor electric vehicle configurations.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80' },
          { id: 'DT-A3', name: 'Carbon Brake Discs', description: 'Next-gen heat dissipation carbon-ceramic braking systems for endurance racing vehicles.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80' },
          { id: 'DT-A4', name: 'Alloy Wheel Hubs', description: 'Lightweight forged performance wheel hubs with integrated high-speed sensors.', image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=800&q=80' },
          { id: 'DT-A5', name: 'Suspension Struts', description: 'Adaptive electronic damping control systems for luxury and performance vehicle tiers.', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80' },
          { id: 'DT-A6', name: 'Transmission Shafts', description: 'Precision-balanced high-tensile steel shafts for heavy-duty torque transfer.', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Electronics',
    slug: 'electronics',
    category: 'Technology',
    shortDescription: 'Semiconductor and assembly components for high-tech industries.',
    fullDescription: 'Supply chain partner for the electronics manufacturing industry, specializing in passive components, server cooling, and connectivity.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    partners: [
      {
        id: 'p5',
        name: 'MicroAssembly Tech',
        logo: '',
        description: 'Global leader in PCB and micro-component distribution.',
        products: [
          { id: 'EL-S1', name: 'Multi-Layer Ceramic Caps', description: 'Ultra-high-density capacitors for mobile devices and hyperscale server applications.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
          { id: 'EL-S2', name: 'FPGA Interface Module', description: 'High-speed field-programmable gate array data interface connectors with gold plating.', image: 'https://images.unsplash.com/photo-1581092162384-8987c1794714?auto=format&fit=crop&w=800&q=80' },
          { id: 'EL-S3', name: 'Copper Heat Sinks', description: 'Advanced phase-change liquid cooling solutions for next-gen GPU clusters.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' },
          { id: 'EL-S4', name: 'Industrial RFID Tags', description: 'Ruggedized NFC/RFID tracking solutions for harsh industrial factory environments.', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80' },
          { id: 'EL-S5', name: 'Solder Paste Flux-X', description: 'High-reliability lead-free assembly materials for precision SMT production lines.', image: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Cutting Tools',
    slug: 'cutting-tools',
    category: 'Tooling',
    shortDescription: 'High-precision industrial tooling and abrasive solutions.',
    fullDescription: 'Duramet Technologies provides high-performance cutting tools, carbide inserts, and customized tooling solutions for precision CNC machining.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    partners: [
      {
        id: 'p6',
        name: 'HardEdge Tooling',
        logo: '',
        description: 'Advanced carbide and diamond-tipped industrial tools.',
        products: [
          { id: 'CT-T1', name: 'Tungsten Carbide Insert', description: 'High-speed turning inserts designed for heat-resistant stainless steel alloys.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
          { id: 'CT-T2', name: 'Precision End Mill', description: '4-flute solid carbide mill for high-speed machining of aerospace-grade titanium.', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80' },
          { id: 'CT-T3', name: 'Diamond Tipped Blade', description: 'Super-abrasive industrial cutting blades for composite and carbon fiber materials.', image: 'https://images.unsplash.com/photo-1530124560676-44b2911f400b?auto=format&fit=crop&w=800&q=80' },
          { id: 'CT-T4', name: 'CNC Tool Holder', description: 'Balanced high-precision collet chucks for high-RPM high-torque machining spindles.', image: 'https://images.unsplash.com/photo-1563206767-5b18f218e0de?auto=format&fit=crop&w=800&q=80' },
          { id: 'CT-T5', name: 'Internal Boring Bar', description: 'Vibration-dampened boring bars for deep-hole high-accuracy internal machining.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    ]
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Industries', path: '/industries' },
  { label: 'About Us', path: '/#about' },
  { label: 'Contact Us', path: '/#contact' },
];