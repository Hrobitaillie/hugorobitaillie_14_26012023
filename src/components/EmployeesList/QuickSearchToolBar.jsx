import { Box } from "@mui/material";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";

export default function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
          display: 'flex',
          flexDirection: 'row-reverse'
        }}
      >
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
        />
      </Box>
    );
}