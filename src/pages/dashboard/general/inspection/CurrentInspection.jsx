// import React, { useEffect } from "react";
// import {
//   Typography,
//   Grid,
//   Card,
//   Stack,
//   Divider,
//   styled,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import Rectangle from "../../../../asset/Images/renovation/Rectangle.png";
// import ReportIcon from "./../../../../asset/svgs/ReportIcon";
// import { CurrentInspectionSkeleton } from "../../../../components/Skeleton";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "../../../../features/loading/loadingSlice";

// const CurrentInspection = () => {
//   const dispatch = useDispatch();
//   const { isLoading } = useSelector((state) => state.loading);

//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setLoading(false));
//     }, 3000);
//   }, []);

//   const data = [
//     {
//       image: Rectangle,
//       building: "Torshov 0476",
//       subtext: "Subtext 1",
//       date: "29-06-2019",
//       type: "Gas Inspection",
//       status: "Good",
//       icon: true,
//     },
//     {
//       image: Rectangle,
//       building: "Torshov 0476",
//       subtext: "Subtext 2",
//       date: "15-08-2020",
//       type: "Gas Inspection",
//       status: "Good",
//       icon: true,
//     },
//     {
//       image: Rectangle,
//       building: "Torshov 0476",
//       subtext: "Subtext 3",
//       date: "01-12-2021",
//       type: "Gas Inspection",
//       status: "Good",
//       icon: true,
//     },
//     {
//       image: Rectangle,
//       building: "Torshov 0476",
//       subtext: "Subtext 4",
//       date: "18-03-2022",
//       type: "Gas Inspection",
//       status: "Good",
//       icon: true,
//     },
//     // Repeat the pattern for other items
//     {
//       image: Rectangle,
//       building: "Torshov 0476",
//       subtext: "Subtext 5",
//       date: "29-06-2019",
//       type: "Gas Inspection",
//       status: "Good",
//       icon: true,
//     },
//     {
//       image: Rectangle,
//       building: "Torshov 0476",
//       subtext: "Subtext 6",
//       date: "15-08-2020",
//       type: "Gas Inspection",
//       status: "Good",
//       icon: true,
//     },
//     // Continue adding more entries if necessary
//   ];
//   return (
//     <>
//       {isLoading ? (
//         <CurrentInspectionSkeleton />
//       ) : (
//         <Card variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
//           {/* <Grid container spacing={2}> */}
//           <Stack direction="row" justifyContent="left" alignItems="center">
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: { xs: 12, md: 14 },
//                 color: "rgba(17, 17, 17, 1)",
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//             >
//               Recommended Companies
//             </Typography>
//             <Typography
//               sx={{
//                 fontWeight: 400,
//                 fontSize: 12,
//                 ml: "12px",
//                 color: "#111111",
//                 fontFamily: "'Poppins', sans-serif",
//                 cursor: "pointer",
//               }}
//             >
//               15 results
//             </Typography>
//           </Stack>
//           <Divider sx={{ my: 1 }} />

//           {data.map((item, index) => (
//             <Grid item xs={12} sx={{ p: 0.5 }} key={index}>
//               <Card sx={{ display: "flex", p: 1 }}>
//                 <CardMedia
//                   component="img"
//                   height="124px"
//                   background="cover"
//                   sx={{ borderRadius: "8px", width: { xs: 80, md: 120 } }}
//                   // width="120px"
//                   image={item.image}
//                   alt={item.building}
//                 />
//                 <CardContent>
//                   <Typography
//                     gutterBottom
//                     sx={{
//                       fontWeight: 600,
//                       fontSize: 14,
//                       color: "rgba(17, 17, 17, 1)",
//                       fontFamily: "'Poppins', sans-serif",
//                     }}
//                   >
//                     {item.building}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       fontWeight: 400,
//                       fontSize: 12,
//                       color: "#111111",
//                       fontFamily: "'Poppins', sans-serif",
//                     }}
//                   >
//                     {item.subtext}
//                   </Typography>
//                   <CustomText>
//                     <Typography
//                       sx={{
//                         fontWeight: 400,
//                         fontSize: 12,
//                         color: "#111111",
//                         pl: "8px",
//                         fontFamily: "'Poppins', sans-serif",
//                       }}
//                     >
//                       {item.date}
//                     </Typography>
//                   </CustomText>

//                   <CustomTextIcon>
//                     <CustomText>
//                       <Typography
//                         sx={{
//                           fontWeight: 400,
//                           fontSize: 12,
//                           color: "#111111",
//                           pl: "8px",
//                           fontFamily: "'Poppins', sans-serif",
//                         }}
//                       >
//                         {item.type}
//                       </Typography>
//                     </CustomText>
//                     <ReportIcon />
//                   </CustomTextIcon>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//           {/* </Grid> */}
//         </Card>
//       )}
//     </>
//   );
// };
// const CustomText = styled(Typography)(({ theme }) => ({
//   width: 120,
//   height: 24,
//   backgroundColor: "#F5F7FB",
//   display: "flex",
//   alignItems: "center",
//   marginBottom: "4px",
// }));
// const CustomTextIcon = styled(Typography)(({ theme }) => ({
//   width: 150,
//   height: 24,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   marginBottom: "4px",
// }));
// export default CurrentInspection;
