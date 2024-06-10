import Branding from '../components/Header';
import Status from '../components/Status';
import Projects from '../components/Projects';
import About from '../components/About';
import Stack from '../components/Stack';
import ContactButtons from '../components/ContactButtons';
function Index() {
  return (
    <div className="flex min-h-screen flex-col gap-10  p-4 pt-8 lg:max-w-screen-xl">
      <div className="flex flex-col items-center gap-4">
        <Branding />

        <Status></Status>
        <ContactButtons></ContactButtons>
      </div>
      <About></About>
      <Stack></Stack>
      <Projects></Projects>
    </div>
  );
}

export default Index;
