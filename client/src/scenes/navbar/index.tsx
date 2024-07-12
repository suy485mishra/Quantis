import { useState } from 'react';
import { Link } from 'react-router-dom';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';



const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');

  return (
    <FlexBetween 
      mb='0.5rem'
      p='0.5rem 2rem'
      color={palette.grey[300]}
      sx={{
        // borderBottom: `1px solid ${palette.grey[700]}`,
        backgroundColor: palette.background.default,
      }}
    >
      {/* Left part */}
      <FlexBetween gap="0.75rem">
        <IconButton sx={{ p: 0 }}>
          <EqualizerRoundedIcon sx={{ fontSize: '28px', color: palette.primary.main }} />
        </IconButton>
        <Typography variant="h4" fontSize="16px" fontWeight="bold">
          Quantis
        </Typography>
      </FlexBetween>

      {/* Right part */}
      <FlexBetween gap="2rem">
        <Link
          to="/"
          onClick={() => setSelected('dashboard')}
          style={{
            textDecoration: 'none',
          }}
        >
          <Box 
            sx={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              color: selected === 'dashboard' ? palette.primary.main : palette.grey[700],
              fontWeight: selected === 'dashboard' ? 'bold' : 'normal',
              '&:hover': {
                color: palette.primary.light,
                backgroundColor: palette.grey[200], // Use a soft background color
              },
            }}
            aria-current={selected === 'dashboard' ? 'page' : undefined}
          >
            Dashboard
          </Box>
        </Link>
        <Link
          to="/predictions"
          onClick={() => setSelected('predictions')}
          style={{
            textDecoration: 'none',
          }}
        >
          <Box 
            sx={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              color: selected === 'predictions' ? palette.primary.main : palette.grey[700],
              fontWeight: selected === 'predictions' ? 'bold' : 'normal',
              '&:hover': {
                color: palette.primary.light,
                backgroundColor: palette.grey[200], // Use a soft background color
              },
            }}
            aria-current={selected === 'predictions' ? 'page' : undefined}
          >
            Predictions
          </Box>
        </Link>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
