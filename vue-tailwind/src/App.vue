<script setup lang="ts">
import { Box, Button, Container, IconButton, LucideGithubIcon, Text } from "~/components";
</script>

<template>
  <Container max="md">
    <Box d="flex" p="1" class="items-center justify-between h-16">
      <Text size="lg" :weight="600">Klass + Vue + Tailwind</Text>

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
      <Button color="primary">Vue</Button>
    </Box>
  </Container>
</template>
