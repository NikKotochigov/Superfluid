import Head from 'next/head';
import { Box, Container, Typography} from '@mui/material';
import { SettingsNotifications } from '../components/layout/settings-notifications';

const Page = () => (
  <>
    <Head>
      <title>
        CFLOWery | Stream
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
          STREAM
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
        </Box>
      </Container>
    </Box>

  </>
);

// Page.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Page;