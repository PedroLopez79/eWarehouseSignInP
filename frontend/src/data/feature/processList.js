import illustration1 from 'assets/img/icons/spot-illustrations/50.png';
import illustration2 from 'assets/img/icons/spot-illustrations/49.png';
import illustration3 from 'assets/img/icons/spot-illustrations/48.png';

export default [
  {
    icon: ['far', 'file'],
    iconText: 'RECEIVING',
    color: 'danger',
    title: 'Receiving Material & Register',
    description:
      'Receiving Material, made more easy and fast to register in inventory.',
    image: illustration1
  },
  {
    icon: ['far', 'object-ungroup'],
    iconText: 'ORDERS',
    color: 'info',
    title: 'Customer Orders (ODC)',
    description:
      "Customers are able to manage material shipments, so it can be collected for deliver, our logistics will andle it, and material will be ready for pickup",
    image: illustration2,
    inverse: true
  },
  {
    icon: ['far', 'file-pdf'],
    iconText: 'DOCUMENTATION',
    color: 'success',
    title: 'Proof off Receivement, Collection',
    description:
      'Our customers will keep record off the material condition att Receivement and Shipment and they will be notify',
    image: illustration3
  }
];
