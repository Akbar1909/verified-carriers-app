import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import PhoneField from "@/components/PhoneField";
import RichText from "@/components/RichText";
import Select from "@/components/Select";
import CircleIcon, { HelpIcon, MailIcon } from "@/components/SvgIcons";
import Textarea from "@/components/Textarea";
import TextField from "@/components/TextField/TextField";

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-6">

      <PhoneField/>

      <TextField placeholder="Phone number" />

      <div className="flex items-center gap-2">
         <Checkbox helperText="Save my login details for next time." label="Remember me" size='md' shape='round' variant='radio' initialState='checked' />
         <Checkbox size='md' shape='round' variant='radio' initialState='unchecked' />
         <Checkbox size='md' shape='round' variant='radio' initialState='indeterminate' />
      </div>

      <div className="flex items-center gap-2">
         <Checkbox size='md' disabled shape='round' variant='radio' initialState='checked' />
         <Checkbox size='md' disabled shape='round' variant='radio' initialState='unchecked' />
         <Checkbox size='md' disabled shape='round' variant='radio' initialState='indeterminate' />
      </div>

      <div className="flex items-center gap-2">
         <Checkbox size='md' shape='round' variant='circular' initialState='checked' />
         <Checkbox size='md' shape='round' variant='circular' initialState='unchecked' />
         <Checkbox size='md' shape='round' variant='circular' initialState='indeterminate' />
      </div>

      <div className="flex items-center gap-2">
         <Checkbox shape='round' disabled variant='circular' initialState='checked' />
         <Checkbox shape='round' disabled variant='circular' initialState='unchecked' />
         <Checkbox shape='round' disabled variant='circular' initialState='indeterminate' />
      </div>

      <div className="flex items-center gap-2">
         <Checkbox disabled label="Remember me"  initialState='checked' />
         <Checkbox helperText="Save my login details for next time." label="Remember me"  initialState='unchecked' />
         <Checkbox helperText="Save my login details for next time." label="Remember me"  initialState='indeterminate' />
      </div>

      <div className="flex items-center gap-2">
         <Checkbox disabled initialState='checked' />
         <Checkbox disabled initialState='unchecked' />
         <Checkbox disabled initialState='indeterminate' />
      </div>
      <div className="flex items-center gap-4 w-80">
        <Select hasError helperText="This is a helper text" placeholder='Select team member' />
      </div>

      <div className="flex items-center gap-4">
        <RichText contentProps={{ placeholder: "Enter a text" }} />
      </div>

      <div className="flex items-center gap-4">
        <Textarea label="Description" placeholder="This is a placeholder" />
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />}>Button CTA</Button>
        <Button startIcon={<CircleIcon />} size="md" disabled>
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="lg">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="xl">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="2xl">
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="secondary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="md" disabled color="secondary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="lg" color="secondary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="xl" color="secondary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="2xl" color="secondary">
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="secondary-gray">
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="md"
          disabled
          color="secondary-gray"
        >
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="lg" color="secondary-gray">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="xl" color="secondary-gray">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="2xl" color="secondary-gray">
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="tertiary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="md" disabled color="tertiary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="lg" color="tertiary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="xl" color="tertiary">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="2xl" color="tertiary">
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="tertiary-gray">
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="md"
          disabled
          color="tertiary-gray"
        >
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="lg" color="tertiary-gray">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="xl" color="tertiary-gray">
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="2xl" color="tertiary-gray">
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} destructive>
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="md" destructive disabled>
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="lg" destructive>
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="xl" destructive>
          Button CTA
        </Button>
        <Button startIcon={<CircleIcon />} size="2xl" destructive>
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="secondary" destructive>
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="md"
          destructive
          disabled
          color="secondary"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="lg"
          destructive
          color="secondary"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="xl"
          destructive
          color="secondary"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="2xl"
          destructive
          color="secondary"
        >
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="secondary-gray" destructive>
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="md"
          destructive
          disabled
          color="secondary-gray"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="lg"
          destructive
          color="secondary-gray"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="xl"
          destructive
          color="secondary-gray"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="2xl"
          destructive
          color="secondary-gray"
        >
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} color="tertiary" destructive>
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="md"
          destructive
          disabled
          color="tertiary"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="lg"
          destructive
          color="tertiary"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="xl"
          destructive
          color="tertiary"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          size="2xl"
          destructive
          color="tertiary"
        >
          Button CTA
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button startIcon={<CircleIcon />} destructive color="tertiary-gray">
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          destructive
          size="md"
          disabled
          color="tertiary-gray"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          destructive
          size="lg"
          color="tertiary-gray"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          destructive
          size="xl"
          color="tertiary-gray"
        >
          Button CTA
        </Button>
        <Button
          startIcon={<CircleIcon />}
          destructive
          size="2xl"
          color="tertiary-gray"
        >
          Button CTA
        </Button>
      </div>

      <Button size="xl" withStartDotIcon>
        Button CTA
      </Button>
      <Button size="xl" withStartDotIcon color="secondary">
        Button CTA
      </Button>
      <Button size="xl" withStartDotIcon disabled color="secondary">
        Button CTA
      </Button>
      <Button size="xl" withStartDotIcon color="secondary-gray">
        Button CTA
      </Button>
      <Button size="xl" withStartDotIcon disabled color="secondary-gray">
        Button CTA
      </Button>
      <Button size="xl" withStartDotIcon color="tertiary">
        Button CTA
      </Button>
      <Button size="xl" withStartDotIcon disabled color="tertiary-gray">
        Button CTA
      </Button>
      <Button size="xl" iconButton>
        <CircleIcon />
      </Button>
    </div>
  );
}
