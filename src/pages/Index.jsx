import Branding from '../components/Hero/Header';
import Status from '../components/Hero/Status';
import Projects from '../components/Projects/Projects';
import About from '../components/About';
import Stack from '../components/Stack/Stack';
import ContactButtons from '../components/Hero/ContactButtons';
function Index() {
  return (
    <div className="flex min-h-screen flex-col gap-10  p-4 pt-8 lg:max-w-screen-lg">
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
