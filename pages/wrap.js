import Head from 'next/head';
import { Box, Container, Typography} from '@mui/material';
import { SettingsNotifications } from '../src/components/layout/settings-notifications';

const Page = () => (
  <>
    <Head>
      <title>
      FLOWery | Wrap
      </title>
    </Head>
 
        <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          WRAP
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
        </Box>
      </Container>
    </Box>

  </>
);


export default Page;
