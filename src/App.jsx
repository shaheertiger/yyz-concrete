import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ConcreteContractorToronto from './pages/ConcreteContractorToronto';
import ConcreteDrivewayToronto from './pages/ConcreteDrivewayToronto';
import ConcreteRepairToronto from './pages/ConcreteRepairToronto';
import ReadyMixDeliveryToronto from './pages/ReadyMixDeliveryToronto';
import ConcreteSlabToronto from './pages/ConcreteSlabToronto';
import StampedConcreteToronto from './pages/StampedConcreteToronto';
import CommercialConcreteContractorToronto from './pages/CommercialConcreteContractorToronto';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/concrete-contractor-toronto/" element={<ConcreteContractorToronto />} />
        <Route path="/concrete-driveway-toronto/" element={<ConcreteDrivewayToronto />} />
        <Route path="/concrete-repair-toronto/" element={<ConcreteRepairToronto />} />
        <Route path="/ready-mix-concrete-delivery-toronto/" element={<ReadyMixDeliveryToronto />} />
        <Route path="/concrete-slab-toronto/" element={<ConcreteSlabToronto />} />
        <Route path="/stamped-concrete-toronto/" element={<StampedConcreteToronto />} />
        <Route path="/commercial-concrete-contractor-toronto/" element={<CommercialConcreteContractorToronto />} />
      </Route>
    </Routes>
  );
}
