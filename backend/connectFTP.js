const ftp = require('basic-ftp');
const conf = require('./config.json');
require('dotenv').config();

async function connectFTP(creds){
	let status = 1; // if complete 1 else 0
	const client = new ftp.Client()
	client.ftp.verbose = false;
	try{
		await client.access({
			host: creds.ip,
			user: process.env.user,
			password: creds.password,
			secure: true
		})
		let paths = await client.list();
		console.log(paths);
		await client.downloadTo(conf.download,paths[0]);
	}catch(err){
		status = 0;
	}
	client.close();
	return status;
}

exports.connectFTP = connectFTP;

