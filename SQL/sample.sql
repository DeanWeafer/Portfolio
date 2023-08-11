
Q1 Select guestname from labexam3_hotel where check_out<'2017-12-31'

Q2 Begin;

Delete from labexam3_hotel where payment is null

Q3 Update labexam3_hotel
set booking = 'Time away'
where booking = 'Getaway Package' and check_in >= '2017-11-01'

Q4 Update labexam3_hotel
set booking = 'Getaway Package'
where payment = 'Voucher' and guests >= 4

Q5 Update labexam3_hotel
set guests = (guests-1)
where booking = 'Getaway Package' and guests > 2

Q6 delete from labexam3_hotel 
where ((check_in >= '2017-01-01' and check_in < '2018-01-01' and check_out >= '2018-01-01' and check_out < '2019-01-01') and (booking = "Room only" or booking = "Corporate")

Q7 Select storename from labexam3_stores,labexam3_supplies,labexam3_supplier
where ((labexam3_stores.storeid = labexam3_supplies.storeid) and (labexam3_supplier.supplierid = labexam3_supplies.supplierid) and suppliername = 'Blogspan')

Q8 Select suppliername,manager,supplierrating,supplierstate from labexam3_stores,labexam3_supplies,labexam3_supplier
where ((labexam3_stores.storeid = labexam3_supplies.storeid) and (labexam3_supplier.supplierid = labexam3_supplies.supplierid) and supplierstate = 'Texas' and storename = 'Corwin Inc')

Q9 Select storename,department,phone,state from labexam3_stores,labexam3_supplies,labexam3_supplier
where ((labexam3_stores.storeid = labexam3_supplies.storeid) and (labexam3_supplier.supplierid = labexam3_supplies.supplierid) and state = 'Ohio' and suppliername = 'Aimbo')

Q10 Select * from labexam3_stores,labexam3_supplies,labexam3_supplier
where ((labexam3_stores.storeid = labexam3_supplies.storeid) and (labexam3_supplier.supplierid = labexam3_supplies.supplierid) and supplierrating >= 7.5 and (department = 'Games' or department = 'Shoes' or department = 'Baby' or department = 'Sports'))

Q11 Select * from labexam3_stores,labexam3_supplier,labexam3_supplies
where ((labexam3_stores.storeid = labexam3_supplies.storeid) and (labexam3_supplier.supplierid = labexam3_supplies.supplierid) and state = 'Oklahoma' and department = 'Electronics' )

Q12 delete from labexam3_supplies join labexam3_stores
where ((labexam3_supplies.storeid = labexam3_stores.storeid) and  storename = 'Corwin Inc');
