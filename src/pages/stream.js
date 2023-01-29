import Head from 'next/head';
import { Box, Container, Typography} from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { SettingsNotifications } from '../components/settings/settings-notifications';

const Page = () => (
  <>
    <Head>
      <title>
        Customers | Material Kit
      </title>
    </Head>
    {/* <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box> */}
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
          SOME INFO
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          {/* <SettingsPassword /> */}
        </Box>
      </Container>
    </Box>

  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
