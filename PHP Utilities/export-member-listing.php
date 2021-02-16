<?php
include ("required.php");
$filename = "IKM MEMBERSHIP LISTING REPORT -".date("d-M-Y").".xls";
header("Content-Disposition: attachment; filename=\"$filename\"");
header("Content-Type: application/vnd.ms-excel");
?>
<style>
.tbltitle{
border-bottom:1px solid black;
border-top:1px solid black;
font-weight: bold;
background-color: #ffff00;
}
br {mso-data-placement:same-cell;}
.tblcontent{
border-bottom:1px solid black;
}
</style>
<?php
$str2 = "SELECT * FROM member_account WHERE status = '".mysqli_real_escape_string($db, $_GET['status'])."' AND isExempted LIKE '".mysqli_real_escape_string($db, $_GET['isExempted'])."' ORDER BY fullname";
$sql = mysqli_query($db, $str2) or die(mysqli_error());
$num = mysqli_num_rows($sql);
			
$n = 0;
?>
<table width="100%" border="1" align="left" cellpadding="4" cellspacing="0">
	<tr>
		<td class="tbltitle">Name</td>
		<td class="tbltitle">Title</td>
		<td class="tbltitle">IC Number</td>
		<td class="tbltitle">Membership Grade</td>
		<td class="tbltitle">Registration Number</td>
		<td class="tbltitle">Member Number</td>
		<td class="tbltitle">Registration Year</td>
		<td class="tbltitle">Registration Date</td>
		<td class="tbltitle">Membership Number</td>
		<td class="tbltitle">Mobile Phone Number</td>
		<td class="tbltitle">Nationality</td>
		<td class="tbltitle">Birth Date</td>
		<td class="tbltitle">Birth Place</td>

		<td class="tbltitle">Sex</td>
		<td class="tbltitle">Marital Status</td>
		<td class="tbltitle">Ethnicity</td>
		<td class="tbltitle">Home Address Line 1</td>
		<td class="tbltitle">Home Address Line 2</td>
		<td class="tbltitle">Home Address Line 3</td>
		<td class="tbltitle">Home Address Line 4</td>
		<td class="tbltitle">Home Address Postcode</td>
		<td class="tbltitle">Home Address State</td>

		<td class="tbltitle">Employer Name</td>
		<td class="tbltitle">Employer Address Line 1</td>
		<td class="tbltitle">Employer Address Line 2</td>
		<td class="tbltitle">Employer Address Line 3</td>
		<td class="tbltitle">Employer Address Line 4</td>
		<td class="tbltitle">Employer Address Postcode</td>
		<td class="tbltitle">Employer Address State</td>
		<td class="tbltitle">Office Telephone Number 1</td>
		<td class="tbltitle">Office Telephone Number 2</td>
		<td class="tbltitle">Office Fax Number</td>

		<td class="tbltitle">Email 1</td>
		<td class="tbltitle">Email 2</td>

		<td class="tbltitle">Position</td>
		<td class="tbltitle">Job start date</td>
		<td class="tbltitle">Area of Expertise</td>
		<td class="tbltitle">Field of Employment</td>

		<td class="tbltitle">Correspondence Address Line 1</td>
		<td class="tbltitle">Correspondence Address Line 2</td>
		<td class="tbltitle">Correspondence Address Line 3</td>
		<td class="tbltitle">Correspondence Address Line 4</td>
		<td class="tbltitle">Correspondence Address Postcode</td>
		<td class="tbltitle">Correspondence Address State</td>

		<?php 
			for($loop = 0; $loop < 3 ; $loop++){
		?>
		<td class="tbltitle">Higher Education Qualification <?= $loop+1 ?> Details: Institution / University</td>
		<td class="tbltitle">Higher Education Qualification <?= $loop+1 ?> Details: Degree (Year)</td>
		<td class="tbltitle">Higher Education Qualification <?= $loop+1 ?> Details: Subject</td>
		<td class="tbltitle">Higher Education Qualification <?= $loop+1 ?> Details: Gred/CGPA</td>
		<td class="tbltitle">Higher Education Qualification <?= $loop+1 ?> Details: Remarks</td>
		<?php } ?>

		<?php 
			for($loop = 0; $loop < 3 ; $loop++){
		?>
		<td class="tbltitle">Postgraduate Qualification <?= $loop+1 ?>: Institution / University</td>
		<td class="tbltitle">Postgraduate Qualification <?= $loop+1 ?>: Details (Year)</td>
		<td class="tbltitle">Postgraduate Qualification <?= $loop+1 ?>: Degree/Diploma</td>
		<td class="tbltitle">Postgraduate Qualification <?= $loop+1 ?>: Research Area</td>
		<?php } ?>

		<td class="tbltitle">Remarks</td>
		<td class="tbltitle">Exempted Member</td>
	</tr>
	<?php
	while($member = mysqli_fetch_assoc($sql))
		{
			$n++;
	?>
	<tr>
		<td align="left" valign="top"><?php echo $member['fullname']; ?></td>
		<td align="left" valign="top"><?php echo $member['title']; ?></td>
		<td align="left" valign="top"><?php echo $member['ic_no']; ?></td>
		<td align="left" valign="top"><?php echo $member['member_grade']; ?></td>
		<td align="left" valign="top"><?php echo $member['registration_number']; ?></td>
		<td align="left" valign="top"><?php echo $member['member_number']; ?></td>
		<td align="left" valign="top"><?php echo $member['year_join']; ?></td>
		<td align="left" valign="top"><?php echo $member['date_joined']; ?></td>
		<td align="left" valign="top"><?php echo $member['memberID']; ?></td>
		<td align="left" valign="top"><?php echo $member['mobile_number']; ?></td>
		<td align="left" valign="top"><?php echo $member['country']; ?></td>
		<td align="left" valign="top"><?php echo $member['date_of_birth']; ?></td>
		<td align="left" valign="top"><?php echo $member['place_of_birth']; ?></td>


		<td align="left" valign="top"><?php echo $member['gender']; ?></td>
		<td align="left" valign="top"><?php echo $member['marital']; ?></td>
		<td align="left" valign="top"><?php echo $member['race'] === 'Other' ? $member['other_race'] : $member['race']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_home']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_home_line2']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_home_line3']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_home_line4']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_home_postcode']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_home_state'] === 'Other' ? $member['other_address_home_state'] : $member['address_home_state'];?></td>

		<td align="left" valign="top"><?php echo $member['company_name']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_office']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_office_line2']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_office_line3']; ?></td>
		<td align="left" valign="top"><?php echo $member['address_office_line4']; ?></td>
		<td align="left" valign="top"><?php echo $member['office_address_postcode']; ?></td>
		<td align="left" valign="top"><?php echo $member['office_address_state']; ?></td>
		<td align="left" valign="top"><?php echo $member['office_number']; ?></td>
		<td align="left" valign="top"><?php echo $member['office_number_2']; ?></td>
		<td align="left" valign="top"><?php echo $member['office_fax']; ?></td>

		<td align="left" valign="top"><?php echo $member['email']; ?></td>
		<td align="left" valign="top"><?php echo $member['email2']; ?></td>

		<td align="left" valign="top"><?php echo $member['occupation']; ?></td>
		<td align="left" valign="top"><?php echo $member['job_start_date']; ?></td>
		<td align="left" valign="top"><?php echo $member['area_of_expertise']; ?></td>
		<td align="left" valign="top"><?php echo $member['field_of_employment'] === 'Other' ? $member['other_field_of_employment'] : $member['field_of_employment'];?></td>

		<td align="left" valign="top"><?php echo $member['correspondence_address']; ?></td>
		<td align="left" valign="top"><?php echo $member['correspondence_address_2']; ?></td>
		<td align="left" valign="top"><?php echo $member['correspondence_address_3']; ?></td>
		<td align="left" valign="top"><?php echo $member['correspondence_address_4']; ?></td>
		<td align="left" valign="top"><?php echo $member['correspondence_address_postcode']; ?></td>
		<td align="left" valign="top"><?php echo $member['correspondence_address_state']; ?></td>

		<?php 
			// JSON decode
			$member['higher_edu'] = json_decode($member['higher_edu'], true); 
			$member['higher_edu'] = is_array($member['higher_edu']) ? $member['higher_edu'] : [];
		?>

		<?php 
			for($loop = 0; $loop < 3 ; $loop++){
		?>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['name']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['year']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['subject']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['cgpa']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['remark']; ?></td>
		<?php
			}
		?>

		<?php 
			// JSON decode
			$member['post_grad'] = json_decode($member['post_grad'], true); 
			$member['post_grad'] = is_array($member['post_grad']) ? $member['post_grad'] : [];
		?>

		<?php 
			for($loop = 0; $loop < 3 ; $loop++){
		?>
			<td align="left" valign="top"><?php echo $member['post_grad'][$loop]['name']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['year']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['type']; ?></td>
			<td align="left" valign="top"><?php echo $member['higher_edu'][$loop]['field']; ?></td>
		<?php
			}
		?>


		<td align="left" valign="top"><?php echo $member['remark']; ?></td>
		<td align="left" valign="top"><?php echo $member['isExempted'] ? 'YES' : 'NO'; ?></td>

	</tr>
	<?php
		}
	?>
</table>