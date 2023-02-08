# Credentials

1. Server URL: http://35.215.84.127 Webpage: http://35.215.84.127:3000
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
