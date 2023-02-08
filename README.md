# csc648 Repository

## Please when ready add your teams application URL or IP to the repository description. This will help with grading. Teams are expected to keep this value up to date.

## Please do the following steps before completing Milestone 0.
1. Change the name of the repository. All that needs to change is the NN to your respective team number. Team numbers whose value is less than 10, please pad with a 0. Ex team 1 is Team01 team 11 is Team11. Please make sure to also remove the username from the repository as well. Teams with incorrectly name repository will have points deducted from their milestone 0 grades.
      - Please follow the naming convention assigned by your instructor.

1. PLEASE REMOVE THE USERNAME FROM THE REPOSITORY NAME!!!

2. Add ALL members of your team to this repository. For it to count, they must ACCEPT the invite.

3. Fill out the table below


| Student Name    | Student Email          | GitHub Username |
|    :---:        |     :---:              |     :---:       |
| Yangesh KC      |ykc@mail.sfsu.edu       |yogeskc          |
| Danish Siddiqui |dsiddiqui@mail.sfsu.edu |danish061296     |
| Aryanna Brown   |abrown22@mail.sfsu.edu  |aryannayazmin    |
| AbishekNeralla  |aneralla@mail.sfsu.edu  |AbishekNeralla   |
| Pramod Khatri   |pkhatri1@mail.sfsu.edu  |pramodkhatri10   |
| Zaid Alkkhatib  |zalkhatib@mail.sfsu.edu |zaidalkhatib     |
| Yuhua           |ywu23@mail.sfsu.edu     |yuhua21223       |
| Mark Jovero     |mjovero@mail.sfsu.edu   |Mark-Jovero      |
## NO code needs to be stored in the root of your repository. You may rename the application folder if you like to your team's application name. But all source code related to your team's application should be stored inside the application folder.



# Credentials

1. Server Webpage URL: http://35.215.84.127:3000
2. SSH username: ubuntu
3. SSH key - download team4SWE file
4. Database URL: "team4books.c8c9xdcpvbxl.us-east-1.rds.amazonaws.com" port: 3306
5. Database username: root
6. Database password: team4SWE!
7. Database name: book

## How to Log In to gcloud Compute SSH
1. Download team4SWE file and store it in a secure directory. Preferabble, in ~/.ssh directory
2. Open your terminal or command line.
3. Type the following: ssh -i "dir/team4SWE" team4swe@35.215.84.127
3.1 Replace dir with the location of the downloaded file.
4. Press enter and you will now have access to the server terminal.
 * If getting a permission denied error, try running command: "sudo chmod 400 dir/team4SWE"

## How to Log In to AWS RDS
1. Use software such as MySQL Workbench or connect directly using script. For scripts, refer to the API for MySQL for that framework. If using Workbench, continue to step 2.
2. Open MySQL Workbench
3. In the "MySQL Connections" header, click on the (+) symbol to add a new connection. 
4. In the popout window titled "Setup New Connection," enter a connection name of your choice.
5. Ensure that the connection method is "Standard (TCP/IP)."
6. Under parameters, enter the endpoint (team4books.c8c9xdcpvbxl.us-east-1.rds.amazonaws.com) in the hostname field. Enter 3306 for the port field.
9. In the username field, enter "root."
10. In the password, click "Store in Keychain..." In the popout, type "team4SWE!" and click "OK."
11. Finally, click "Test Connection." This step may take a while but should return a "Successful Connection" message.
12. Upon successful access, you may now access the database.


(up-to-date as of 22 April 2021)
