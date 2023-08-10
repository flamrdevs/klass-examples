<script lang="ts">
  import { Box, Button, Container, IconButton, LucideGithubIcon, Text } from "~/components";
</script>

<Container max="md">
  <Box d="flex" p="1" class="items-center justify-between h-16">
    <Text size="lg" weight={600}>Klass + Svelte + Tailwind</Text>

    <Box d="flex" class="gap-2">
      <IconButton>
        <LucideGithubIcon />
      </IconButton>
    </Box>
  </Box>
</Container>

<Container max="md">
  <Box d="flex" class="items-center justify-center gap-2">
    <Button color="neutral">Klass</Button>
    <Button color="primary">Svelte</Button>
  </Box>
</Container>
