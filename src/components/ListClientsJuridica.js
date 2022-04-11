import {EditOutlined,UserOutlined,PhoneOutlined ,FontSizeOutlined,TrademarkCircleOutlined,AlignCenterOutlined,LockOutlined,FieldNumberOutlined,NumberOutlined } from '@ant-design/icons/lib/icons';
import { Col, Modal, Row, Table,InputNumber,Form ,Input,Button,Select,DatePicker,message} from 'antd';  
import React, { useEffect, useState ,createRef} from 'react'
import companyServices from '../../../services/company/companyServices.js'
const ListClientsJuridica = () => {

    const [clientNatural, setClientNatural] = useState([])
    const [modal, setModal] = useState(false); 
    const [modalNewClient,setModalNewClient]=useState(false);
    const [form] = Form.useForm();
    const wrapper = createRef();
    const [city,setCity]=useState([]);
    const [documentTypeIdentification,setdocumentTypeIdentification]=useState([]);
    const [documentTypes,setDocumentTypes]=useState([]);
    const [selectCosuntry,setSelectCosuntry]=useState([]);
    const [statusClient,setStatusClient]=useState([]);
    const [country,setCountry]=useState([]);
    const [dataEdithName,setDataEdithName]= useState([])
    const [dataEdithEmail,setDataEdithEmail]= useState([]); 
    const [dataEdithstatusClient,setDataEdithstatusClient]= useState([]);
    const [dataEdithClient,setDataEdithClient]= useState([]);
    const [dataEdithAddress,setDataEdithAddress]= useState([]);
    const [dataEdithphoneNumber,setDataEdithphoneNumber]= useState([]);

    useEffect(() => {
        getClientJuridica()
        getStatusClient()
        getCountry()
        getDocumentType()
    }, [])

    let rolPersonJuridica=2;
    const getClientJuridica = () => {
        companyServices.getClientNaturalJuridica(rolPersonJuridica)
            .then(res => { 
                setClientNatural(res.data);
            }).catch(err => {
                console.log(err)
                Modal.error({
                    title: 'Error',
                    content: err.data.message ? err.data.message : "Error al traer la lista de empleados rechazados",
                })
            })
    };
    const getStatusClient = () => {
        companyServices.getStatusClient()
            .then(res => { 
                setStatusClient(res.data);
            }).catch(err => {
                console.log(err)
                Modal.error({
                    title: 'Error',
                    content: err.data.message ? err.data.message : "Error al traer la lista de empleados rechazados",
                })
            })
    };
    const getCountry = () => {
        companyServices.getCountry()
            .then(res => { 
               // console.log(res.data)
                setCountry(res.data);
            }).catch(err => {
                console.log(err)
                Modal.error({
                    title: 'Error',
                    content: err.data.message ? err.data.message : "Error al traer la lista de empleados rechazados",
                })
            })
    };
    const getDocumentType = () => {
        companyServices.getDocumentType()
            .then(res => { 
                 //console.log(res.data)
                setDocumentTypes(res.data);
            }).catch(err => {
                console.log(err)
                Modal.error({
                    title: 'Error',
                    content: err.data.message ? err.data.message : "Error al traer la lista de empleados rechazados",
                })
            })
    };
    const getCity= (e) => { console.log(e)
        setSelectCosuntry(e)
        companyServices.getCity(e)
            .then(res => { 
                 console.log(res.data)
                 setCity(res.data);
            }).catch(err => {
                console.log(err)
                Modal.error({
                    title: 'Error',
                    content: err.data.message ? err.data.message : "Error al traer la lista de empleados rechazados",
                })
            })
    }
    const onFinish = (values) => {
        console.log(values)
   
        if(values.socialReason===undefined){
            message.success('La Razon social es Requerida');
        }
        if(values.statusClient===undefined){
            message.success('El  Estado del Cliente Requerido');
        }
        
        if(values.phoneNumber===undefined){
            message.success('El telefono Requerido');
        }
        if(values.password===undefined){
            message.success('La contraseña es requerida ');
        }
        if(values.nit===undefined){
            message.success('El nit es Requerido');
        }
        if(values.country!==undefined){
            if(values.city===undefined){
                message.success('la Ciudad es Requerido');
            }
            
        }
        else if(values.country===undefined) {
            message.success('El pais es Requerido');
        }
        if(values.address===undefined){
            message.success('La direccion es Requerida');
        }
        if(values.email===undefined){
            message.success('El email es Requerido');
        }
        if(values.lastName===undefined){
            message.success('El Nombre es Requerido');
        }
        if(values.name===undefined){
            message.success('El Apellido es Requerido');
        }
        if(values.typeDocuments!==undefined){
            if(values.identification===undefined){
                message.success('El Tipo de Documento es Requerido es Requerido');
            }
            
        }
        else if(values.typeDocuments===undefined) {
            message.success('El Tipo de Documento es Requerido es Requerido');
        }
        if( values.socialReason!==undefined && values.typeDocuments !==undefined && values.identification !==undefined && values.name!==undefined && values.lastName!==undefined && values.email!==undefined && values.address!==undefined && values.country!==undefined && values.city!==undefined && values.nit!==undefined && values.password!==undefined && values.statusClient!==undefined && values.phoneNumber!==undefined && values.socialReason!==undefined)
        {
            let body = {
                email: values.email,
                password: values.password,
                socialReason:values.socialReason,
                typeDocuments: values.typeDocuments,
                identification:values.identification,
                name:values.name,
                lastName: values.lastName,
                address:values.address,
                country:values.country,
                city:values.city,
                nit:values.nit,
                password:values.password,
                statusClient:values.statusClient,
                phoneNumber: values.phoneNumber,
                socialReason:values.socialReason,
                birthDate:values.birthday?values.birthday._d:"",
                role:2
            };
            companyServices.CreateNewClient(body)
            .then(res => {  
                  Modal.success({  title: 'Creado Satisfactoriamente',  content: res.data.message ? res.data.message : "Se ha creado Satisfactoriamente", })
                  setModalNewClient(false);
                }).catch(err => {
                console.log(err)
                Modal.error({  title: 'Error',  content: err.data.message ? err.data.message : "Error al traer la lista de empleados rechazados",
                })
            })
    
        }
        
        
    };
    const onCliclEdith=(record)=>{  
         setDataEdithEmail({email:record.email});
         setDataEdithstatusClient({statusClient: record.statusClient});
         setDataEdithClient({identification:record.cliente});
         setDataEdithAddress({address:record.address})
         setDataEdithphoneNumber({phoneNumber:record.phoneNumber});
         setDataEdithName({name:record.name}); 
         setModalEditar()
         console.log(record);
    }
    const onChange=(date, dateString) =>{
        console.log(date, dateString);
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
     const resetDatos=()=>{
         setDataEdithEmail({email:""});
         setDataEdithstatusClient({statusClient:""});
         setDataEdithClient({identification:""});
         setDataEdithAddress({address:""})
         setDataEdithphoneNumber({phoneNumber:""});
         setDataEdithName({name:""}); 
         form.resetFields();
         setModal(false);
    };
    const closeModalEdit =()=>{
        form.resetFields();
        setModal(false);
        form.resetFields();
    }
    const setModalEditar=()=>{
        form.resetFields()
        setModal({ state: true});
    }
    let dataTable = [] 
    if (clientNatural.length > 0) {
        clientNatural.map((d, i) => {
            let completeName = d.name + " " + d.lastName;
            let paisCountry=d.pais+"/"+d.city;
            dataTable.push({
                key:  d.idUser,
                idUser: d.idUser,
                name: completeName, 
                phoneNumber: d.phoneNumber,
                email: d.email,
                rol:d.role,
                birthDate:d.birthDate?d.birthDate.split('T')[0]:"No Registrada",
                address:d.address,
                company: d.company,
                cliente: d.client,
                pais:paisCountry,
                statusClient:d.clientStatus
            })
        })
    }

    let columns = [
        { title: "Estado Cliente", key: "statusClient", dataIndex: "statusClient" },
        { title: "Cedula", key: "cliente", dataIndex: "cliente" },
        { title: "Nombre", key: "name", dataIndex: "name" },
        { title: "Compañia", key: "company", dataIndex: "company" },
        { title: "Telefono", key: "phoneNumber", dataIndex: "phoneNumber" },
        { title: "Correo", key: "email", dataIndex: "email" },
        { title: "Pais/Ciudad", key: "pais", dataIndex: "pais" },
        { title: "Fecha de Cumpleaños", key: "birthDate", dataIndex: "birthDate" },
        { title: "Direccion", key: "address", dataIndex: "address" },
        { title: "Accion", key: "edit", dataIndex: "edit",  render: (text, record, index) => {

             
                 
                return (
                    <a target='_blank' onClick={() => onCliclEdith(record)}>
                        <EditOutlined className={'icons-table'} style={{ textAlign: 'center', display: 'block' }} />
                    </a>
                )
            }
        },
    ]
     
    return (
        <>
            <br />
            <h2>Listado de Clientes Personas Juridicas</h2>
            
            <div style={{textAlign: "right"}}>
            <Button type="primary" danger onClick={() =>setModalNewClient(true) } >
              Agregar Cliente Juridico
            </Button>
            </div>
            
            <br /> 
            <Table
                dataSource={dataTable}
                columns={columns}
                style={{ width: 'auto' }}
                scroll={{ x: '1000px' }}
                bordered
                pagination={true}
            />
            <Modal
                title="Editar Cliente"
                visible={modal}
                okText={"Guardar Cambios"}
                width={800}
                onOk={() => closeModalEdit()}
                onCancel={() => resetDatos()}>     
                <div>    {console.log(dataEdithName.name)}
                <Form
                    form={form} name="basic"  labelCol={{ span: 8,  }} wrapperCol={{  span: 16,   }}
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    ref={wrapper}  
                     >
                    
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item    
                        label="Nombre"  style={{ color: '#212330' }} name="name"  initialValue={dataEdithName.name}   >
                        <Input ref={wrapper} prefix={<UserOutlined className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={10}>
                    <Form.Item    
                        label="Identificacion"  style={{ color: '#212330' }} name="cliente" initialValue={dataEdithClient.identification}  >
                        <Input ref={wrapper} prefix={<FieldNumberOutlined className="site-form-item-icon" />}   />
                    </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item    
                        label="Correo Electronico"  style={{ color: '#212330' }} name="email"   initialValue={dataEdithEmail.email} >
                        <Input ref={wrapper} prefix={<UserOutlined className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={10}>
                    <Form.Item    
                        label="Telefono"  style={{ color: '#212330' }} name="phoneNumber" initialValue={dataEdithphoneNumber.phoneNumber} >
                        <Input ref={wrapper} prefix={<PhoneOutlined className="site-form-item-icon" />}   />
                    </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={10}> 
                    <Form.Item    
                        label="Direccion"  style={{ color: '#212330' }} name="address" initialValue={dataEdithAddress.address}  >
                        <Input ref={wrapper} prefix={<TrademarkCircleOutlined className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={14}>
                    <Form.Item    
                        label="Estado del Cliente"  style={{ color: '#212330' }} name="statusClient"  >
                       <Select>
                       { statusClient.map((type,i)=>(
                        <Select.Option key={i} value={type.idStatusClient}> {type.descripcion}</Select.Option>
                       ))}
                          
                        </Select>
                    </Form.Item>
                    </Col>
                    </Row>
                </Form>
                
                </div>
            </Modal>
          
           <Modal
                title="Crear Cliente Persona Juridica "
                visible={modalNewClient}
                footer={ null }
                onFinish={onFinish}
                onCancel={()=>setModalNewClient(false)}
                width={800}>     
                <div> 

               { modalNewClient          &&
                <Form
                    form={form} name="basic"  labelCol={{ span: 8,  }} wrapperCol={{  span: 16,   }}
                    onFinishFailed={onFinishFailed}  onFinish={onFinish}
                    autoComplete="on"
                    ref={wrapper} 
                     >
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item   label="Nit" style={{ color: '#212330' }}    name="nit"   >
                        <InputNumber ref={wrapper} prefix={<NumberOutlined  className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={10}>
                    <Form.Item    
                        label="Razon Social"  style={{ color: '#212330' }} name="socialReason"    >
                        <Input ref={wrapper} prefix={<AlignCenterOutlined className="site-form-item-icon" />}   />
                    </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item    
                        label="Email"  style={{ color: '#212330' }} name="email"    >
                        <Input ref={wrapper} prefix={<UserOutlined className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={10}>
                    <Form.Item    
                        label="Contraseña"  style={{ color: '#212330' }} name="password"   >
                        <Input ref={wrapper} type= "password" prefix={<LockOutlined className="site-form-item-icon" />}   />
                    </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item    
                        label="Pais"  style={{ color: '#212330' }} name="country" rules={[ {  type: "number" }, ]}  >
                        
                        <Select  onChange={(e)=>getCity(e)}>
                       { country.map((type,i)=>(  
                        <Select.Option key={i} value={type.idCountry}> {type.name}</Select.Option>
                       ))}</Select>
                       
                    </Form.Item>
                    </Col>
                     {selectCosuntry>0 && 
                        <Col xs={12} sm={12} md={8} lg={10}> 
                        <Form.Item    
                        label="Ciudad"  style={{ color: '#212330' }} name="city"  >
                      <Select>   { city.map((type,i)=>( <Select.Option key={i} value={type.idCity}> {type.name}</Select.Option>
                       ))} </Select>
                        </Form.Item>
                        </Col>
                     }
                    </Row>
                    <Row gutter={20} className={"form-request-rows"}>
                     <h2>Datos del Representante legal</h2>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item    
                        label="Nombre"  style={{ color: '#212330' }} name="name"    >
                        <Input ref={wrapper} prefix={<FontSizeOutlined className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={10}>
                    <Form.Item    
                        label="Apellidos"  style={{ color: '#212330' }} name="lastName"   >
                        <Input ref={wrapper} prefix={<FontSizeOutlined className="site-form-item-icon" />}   />
                    </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={14}> 
                    <Form.Item    
                        label="Tipo de documento"  style={{ color: '#212330' }} name="typeDocuments"    >
                         <Select  onChange={(e)=>setdocumentTypeIdentification(e)}>
                        { documentTypes.map((type,i)=>(  
                        <Select.Option key={i} value={type.id}> {type.name}</Select.Option>
                       ))}</Select>
                    </Form.Item>
                    </Col>{documentTypeIdentification>0 &&
                        <Col xs={12} sm={12} md={8} lg={10}>
                            <Form.Item    
                                label="Identificacion"  style={{ color: '#212330' }} name="identification"     >
                                <InputNumber ref={wrapper} type="number" prefix={<NumberOutlined className="site-form-item-icon" />}   />
                            </Form.Item>
                         </Col>
                    }
                    
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                          <Col xs={12} sm={12} md={12} lg={14}>
                            <Form.Item    
                                label="Telefono"  style={{ color: '#212330' }} name="phoneNumber"    >
                                <Input  ref={wrapper} maxLength={10} minLength={10} type="number" prefix={<PhoneOutlined className="site-form-item-icon" />}   />
                            </Form.Item>
                         </Col>
                         <Col xs={12} sm={12} md={8} lg={10}>
                            <Form.Item    
                                label="Fecha de Cumpleaños"  style={{ color: '#212330' }} name="birthday"    >
                                <DatePicker onChange={onChange} />
                            </Form.Item>
                         </Col>
                    </Row>
                    <Row gutter={80} className={"form-request-rows"}>
                     <Col xs={12} sm={12} md={12} lg={10}> 
                    <Form.Item    
                        label="Direccion"  style={{ color: '#212330' }} name="address"    >
                        <Input ref={wrapper} prefix={<TrademarkCircleOutlined className="site-form-item-icon" />}  />
                    </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={14}>
                    <Form.Item    
                        label="Estado del Cliente"  style={{ color: '#212330' }} name="statusClient"  rules={[ {  type: "number"  }, ]}  >
                       <Select>
                       { statusClient.map((type,i)=>(
                        <Select.Option key={i} value={type.idStatusClient}> {type.descripcion}</Select.Option>
                       ))} </Select>
                    </Form.Item>
                    </Col>
                    </Row>
                    <Form.Item
                            wrapperCol={ {
                                offset: 5,
                                span: 16,
                            } }
                        >
                            <Button type="primary" htmlType="submit" style={ { backgroundColor: '#194978' } }>
                                Ingresar
                            </Button>
                    </Form.Item>
                </Form>
               }
                </div>
            </Modal> 
        </>
    )
}
export default ListClientsJuridica
