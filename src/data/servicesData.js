import HardwareRepairImage from '../assets/Hardware.jpeg';
import SoftwareIssueImage from '../assets/software issue.jpeg';
import ScreenReplaceImage from '../assets/Screen Replace.jpeg';
import BatteryReplaceImage from '../assets/Battery Replace.jpeg';
import RamReplaceImage from '../assets/Ram Replace.jpeg';
import SSDReplaceImage from '../assets/SSD Replace.jpeg';
import KeyboardImage from '../assets/Keybroad.jpeg';
import HingesImage from '../assets/Hinges.jpeg';
import PanelImage from '../assets/panel.jpeg';
import CleaningImage from '../assets/cleaning.jpeg';
import ChargingPortableImage from '../assets/charging portable.jpeg';
import CoolingFanImage from '../assets/coolingfan.jpeg';

const services = [
  {
    id: 1,
    image: HardwareRepairImage,
    title: 'Motherboard Repair',
    description: 'Professional repair for motherboard, CPU, GPU, and other hardware components.',
    price: '₹1,999',
    warranty: '1 Month Warranty',
    repairTime: '24 Hours',
    features: ['Motherboard repair', 'Power issues', 'Port repairs']
  },
  {
    id: 2,
    image: SoftwareIssueImage,
    title: 'Software Issues',
    description: 'Troubleshoot OS problems, driver issues, and software conflicts.',
    price: '₹999',
    warranty: 'No Warranty',
    repairTime: '2 Hours',
    features: ['OS installation', 'Driver updates', 'Malware removal']
  },
  {
    id: 3,
    image: ScreenReplaceImage,
    title: 'Screen Replacement',
    description: 'Quick and professional LCD/LED screen replacement for all brands.',
    price: '₹3,999',
    warranty: '3 Months Warranty',
    repairTime: '2 Hours',
    features: ['LCD replacement', 'LED repair', 'Touch screen fix']
  },
  {
    id: 4,
    image: BatteryReplaceImage,
    title: 'Battery Replacement',
    description: 'Perfect solution for fast battery draining, not charging, or a swollen battery.',
    price: '₹1,999',
    warranty: '6 Months - 1 Year',
    repairTime: '1-2 Hours',
    features: ['Original battery', 'OEM Quality Battery', 'Compatible Battery']
  },
  {
    id: 5,
    image: RamReplaceImage,
    title: 'RAM Upgrade',
    description: 'Boost laptop speed with expert RAM installation and compatibility testing.',
    price: '₹2,999',
    warranty: '2 Years',
    repairTime: '1-2 Hours',
    features: ['Memory upgrade', 'Compatibility check', 'Performance tuning']
  },
  {
    id: 6,
    image: SSDReplaceImage,
    title: 'SSD Upgrade',
    description: 'Install fast SSD storage for quicker boots, app launch, and overall responsiveness.',
    price: '₹5,999',
    warranty: '5 Years',
    repairTime: '1-2 Hours',
    features: ['SSD installation', 'Data migration', 'Speed optimization']
  },
  {
    id: 7,
    image: KeyboardImage,
    title: 'Keyboard Replacement',
    description: 'Replace worn, broken, or unresponsive laptop keyboards with quality parts.',
    price: '₹1,999',
    warranty: '3 Months',
    repairTime: '3 Hours',
    features: ['Key replacement', 'Keyboard connector repair', 'Typing test']
  },
  {
    id: 8,
    image: HingesImage,
    title: 'Hinges Replacement',
    description: 'Fix loose or broken laptop hinges for stable screen movement and safe handling.',
    price: '₹2,500',
    warranty: '1 Month',
    repairTime: '3 Hours',
    features: ['Hinge replacement', 'Frame alignment', 'Sturdy support']
  },
  {
    id: 9,
    image: PanelImage,
    title: 'Laptop Panel Replacement',
    description: 'Replace damaged panels and casing to restore the laptop’s look and strength.',
    price: '₹2,999',
    warranty: 'No Warranty',
    repairTime: '3 Hours',
    features: ['Panel replacement', 'Case repair', 'Finish polishing']
  },
  {
    id: 10,
    image: CleaningImage,
    title: 'Cleaning & Maintenance',
    description: 'Deep cleaning, dust removal, and thermal paste application.',
    price: '₹999',
    warranty: 'No Warranty',
    repairTime: '2 Hours',
    features: ['Dust cleaning', 'Cooling improvement', 'Preventive maintenance']
  },
  {
    id: 11,
    image: ChargingPortableImage,
    title: 'Charging Portable',
    description: 'Portable charging and power port servicing for laptops that won’t charge.',
    price: '₹1,999',
    warranty: 'No Warranty',
    repairTime: '3 Hours',
    features: ['Charging repair', 'Port replacement', 'Power diagnostics']
  },
  {
    id: 12,
    image: CoolingFanImage,
    title: 'Laptop Cooling Fan Replacement',
    description: 'Replace faulty cooling fans to restore airflow and reduce overheating.',
    price: '₹1,500',
    warranty: 'No Warranty',
    repairTime: '2 Hours',
    features: ['Fan replacement', 'Thermal cleaning', 'Cooling optimization']
  }
];

export default services;
